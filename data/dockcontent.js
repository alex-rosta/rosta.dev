import React from 'react';
import {
  IconHome,
  IconBrandSpotify,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandDocker,
  IconBrandGithub,
} from '@tabler/icons-react';
import { siteConfig } from './config/site';

export const links = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full text-orange-500 !text-orange-500" style={{ color: '#F97316' }} />,
    href: '/',
  },

  {
    title: 'Spotify',
    icon: <IconBrandSpotify className="h-full w-full text-green-500 !text-green-500" style={{ color: '#1DB954' }} />,
    href: siteConfig.socialLinks.spotify,
  },

  {
    title: 'Instagram',
    icon: <IconBrandInstagram className="h-full w-full text-pink-400 !text-pink-400" style={{ color: '#EC4899' }} />,
    href: siteConfig.socialLinks.instagram,
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-blue-500 !text-blue-500" style={{ color: '#0077B5' }} />,
    href: siteConfig.socialLinks.linkedin,
  },
  {
    title: 'Dockerhub',
    icon: <IconBrandDocker className="h-full w-full text-blue-400 !text-blue-400" style={{ color: '#2496ED' }} />,
    href: siteConfig.socialLinks.dockerhub,
  },
  {
    title: 'Github',
    icon: <IconBrandGithub className="h-full w-full text-gray-200 !text-gray-200" style={{ color: '#F0F6FF' }} />,
    href: siteConfig.socialLinks.github,
  },
];
