// CharacterInfo.js
import React from 'react';

const CharacterInfo = ({ character }) => {
  const lastLoginDate = new Date(character.lastLogin);
  const currentDate = new Date();
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const isRecentLogin = currentDate - lastLoginDate <= oneWeekInMilliseconds;

  const factionColor = character.faction === 'Horde' ? '#8a0b1a' : 'blue';

  const classColors = {
    Warrior: '#c79c6e',
    Paladin: '#f58cba',
    Hunter: '#abd473',
    Rogue: '#fff569',
    Priest: '#ffffff',
    'Death Knight': '#c41f3b',
    Shaman: '#0070de',
    Mage: '#69ccf0',
    Warlock: '#9482c9',
    Monk: '#00ff96',
    Druid: '#ff7d0a',
    'Demon Hunter': '#a330c9',
    Evoker: '#33937f',
  };

  const classColor = classColors[character.class] || 'inherit';

  return (
    <div className="shadow-md rounded-lg p-6 mt-46">
      <div className="text-center">
        <img
          src="/images/wowbanner.png"
          className="center-image"
          alt="World of Warcraft Banner"
          style={{ marginTop: '5rem' }}
        />
        <img
          src={character.imageurl}
          className="center-image my-4"
          alt="character avatar"
        />
      </div>{' '}
      <br />
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-4 rounded-lg shadow-inner">
        <img src={character.characterimg} className="rounded-lg" />
        <strong>
          {character.name} {character.title}
        </strong>{' '}
        <br />
        <strong>{character.realm}</strong> <br />
        <strong style={{ color: classColor }}>
          {character.specialization} {character.class}
        </strong>{' '}
        <br />
        <strong>Level: {character.level}</strong>
        <br />
        <strong>Last Login:</strong>{' '}
        <strong style={{ color: isRecentLogin ? 'green' : 'inherit' }}>
          {character.lastLogin}
        </strong>{' '}
        <br />
        <strong>Achievement Points:</strong> {character.achievementPoints}{' '}
        <br />
        <strong>Faction:</strong>{' '}
        <strong style={{ color: factionColor }}>{character.faction}</strong>{' '}
        <br />
        <strong>Item Level:</strong> {character.equippedItemLevel} <br />
        <strong>Guild: {character.guild}</strong>
        <br />
      </div>
    </div>
  );
};

export default CharacterInfo;
