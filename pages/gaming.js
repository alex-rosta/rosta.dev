import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Image from 'next/image';

const gamesUrl = 'https://api.rosta.dev/steaminfo';
const userUrl = 'https://api.rosta.dev/userinfo';

async function fetchPlayTime(gamesUrl) {
  try {
    const response = await fetch(gamesUrl);
    const jsonContent = await response.json();
    if (jsonContent.response.games) {
      const games = jsonContent.response.games;
      const sortedGames = games.sort(
        (a, b) => b.playtime_forever - a.playtime_forever
      );

      return sortedGames
        .map((game) => {
          const lastPlayedDate = new Date(game.rtime_last_played * 1000); // Convert seconds to milliseconds
          const day = String(lastPlayedDate.getDate()).padStart(2, '0');
          const month = String(lastPlayedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
          const year = lastPlayedDate.getFullYear();
          const hours = String(lastPlayedDate.getHours()).padStart(2, '0');
          const minutes = String(lastPlayedDate.getMinutes()).padStart(2, '0');
          const seconds = String(lastPlayedDate.getSeconds()).padStart(2, '0');

          const humanReadableLastPlayed = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

          return {
            name: game.name,
            playtimeHours: Math.floor(game.playtime_forever / 60),
            image: game.img_icon_url,
            appid: game.appid,
            lastplayed: humanReadableLastPlayed,
          };
        })
        .filter((game) => game.playtimeHours >= 1);
    } else {
      console.log('No games found for the specified Steam ID.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function fetchUserInfo(userUrl) {
  try {
    const response = await fetch(userUrl);
    const jsonContent = await response.json();
    if (jsonContent.response.players) {
      const player = jsonContent.response.players[0];
      const lastOnlineDate = new Date(player.lastlogoff * 1000); // Convert seconds to milliseconds
      const day = String(lastOnlineDate.getDate()).padStart(2, '0');
      const month = String(lastOnlineDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = lastOnlineDate.getFullYear();
      const hours = String(lastOnlineDate.getHours()).padStart(2, '0');
      const minutes = String(lastOnlineDate.getMinutes()).padStart(2, '0');
      const seconds = String(lastOnlineDate.getSeconds()).padStart(2, '0');

      const humanReadableLastOnline = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

      return {
        username: player.personaname,
        steamid: player.steamid,
        profileurl: player.profileurl,
        avatar: player.avatarfull,
        lastonline: humanReadableLastOnline,
      };
    } else {
      console.log('No user found for the specified Steam ID.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
}

export const GamingPage = () => {
  const [games, setGames] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function loadPlayTime() {
      setLoading(true); // Set loading to true before fetching data
      const playTimeData = await fetchPlayTime(gamesUrl);
      setGames(playTimeData);
      const userData = await fetchUserInfo(userUrl);
      setUserInfo(userData);
      setLoading(false); // Set loading to false after data is fetched
    }
    loadPlayTime();
  }, []);

  const maxPlaytime =
    games.length > 0 ? Math.max(...games.map((game) => game.playtimeHours)) : 1;

  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row className="ml-14 mt-24">
            <Col md={12}>
              {userInfo ? (
                <div className="user-info">
                  <strong>{userInfo.username}</strong>
                  <p>
                    {' '}
                    <strong>Last Online:</strong> {userInfo.lastonline}{' '}
                  </p>
                  <p>
                    {' '}
                    <a
                      href={userInfo.profileurl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {userInfo.profileurl}
                    </a>
                  </p>
                  <p>
                    {' '}
                    <img src={userInfo.avatar} alt="User Avatar" />
                  </p>
                </div>
              ) : (
                <p>No user information available.</p>
              )}
            </Col>
          </Row>
          <Row className="ml-14 mr-14">
            {games.map((game, index) => (
              <Col key={index} md={12}>
                <div className="game-stat">
                  <img
                    src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.image}.jpg`}
                    alt="Game Icon"
                  />
                  <strong>{game.name}:</strong> {game.playtimeHours} hours
                  <p>
                    {' '}
                    <strong>Last Played:</strong> {game.lastplayed}{' '}
                  </p>
                  <div className="w-full bg-inherit rounded-3xl h-5">
                    <div
                      className="bg-green-500 h-5 rounded-3xl bar-animation"
                      style={{
                        width: `${(game.playtimeHours / maxPlaytime) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};
export default GamingPage;
