import React, { useEffect, useState } from 'react';
import { IconBrandSpotify } from '@tabler/icons-react';
import Link from 'next/link';

const Footer = () => {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      const response = await fetch('/api/now-playing');
      const data = await response.json();
      setSongData(data);
    };

    fetchCurrentlyPlaying();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-[5rem] bg-transparent text-white z-50">
      {songData && songData.isPlaying ? (
        <div className="flex items-center">
          <strong className="text-l mr-4 ">Now Playing:</strong>
          <img
            src={songData.albumImageUrl}
            alt="Album Art"
            className="h-12 w-12 mr-4 rounded-lg"
          />
          <div className="flex flex-col">
            <strong className="text-l">{songData.title}</strong>
            <strong className="text-sm">{songData.artist}</strong>
            <Link
              href={songData.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Listen on Spotify
            </Link>
          </div>
          <IconBrandSpotify className="ml-5" size={50} color="green" />
        </div>
      ) : (
        <p>Not playing any music right now</p>
      )}
    </div>
  );
};

export default Footer;
