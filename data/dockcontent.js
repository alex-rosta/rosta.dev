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
    icon: <IconHome className="h-full w-full text-neutral-300" />,
    href: '/',
  },

  {
    title: 'Spotify',
    icon: <IconBrandSpotify className="h-full w-full text-white-300" />,
    href: siteConfig.socialLinks.spotify,
  },

  {
    title: 'Instagram',
    icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
    href: siteConfig.socialLinks.instagram,
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
    href: siteConfig.socialLinks.linkedin,
  },
  {
    title: 'Dockerhub',
    icon: <IconBrandDocker className="h-full w-full text-neutral-300" />,
    href: siteConfig.socialLinks.dockerhub,
  },
  {
    title: 'Github',
    icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
    href: siteConfig.socialLinks.github,
  },
];
