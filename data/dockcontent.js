import React from 'react';
import {
  IconHome,
  IconBrandSpotify,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandDocker,
  IconBrandGithub,
} from '@tabler/icons-react';

export const links = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-300" />,
    href: '/',
  },

  {
    title: 'Spotify',
    icon: <IconBrandSpotify className="h-full w-full text-white-300" />,
    href: 'https://open.spotify.com/playlist/5whHI7frkx9JgpYVV1RzKh?si=52b6961020ae4875',
  },

  {
    title: 'Instagram',
    icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
    href: 'https://www.instagram.com/ro.sta/',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
    href: 'https://www.linkedin.com/in/alexander-rosta-480a2120a/?trk=people-guest_people_search-card',
  },
  {
    title: 'Dockerhub',
    icon: <IconBrandDocker className="h-full w-full text-neutral-300" />,
    href: 'https://hub.docker.com/repositories/alexrsit',
  },
  {
    title: 'Github',
    icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
    href: 'https://github.com/alexrsit',
  },
];
