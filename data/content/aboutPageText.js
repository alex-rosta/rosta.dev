// About Page Text Content
// This file contains all the text content for the about page
// Edit this file to change the text displayed on the about page

export const aboutPageText = {
  // Words for the flip animation
  flipWords: [
    'IAM',
    'Kubernetes',
    'Cloud',
    'Linux',
    'Docker',
    'CI/CD',
    'K8s',
    'SAML2.0',
    'OAuth2.0',
    'OpenID Connect',
    'Azure',
    'AWS',
    'Python',
    'PowerShell',
    'Next.js',
    'VMware',
  ],

  // Tab content
  tabs: {
    aboutMe: {
      title: 'About Me',
      description: "Welcome to my about.me page. I'm a Systems Administrator, currently working in Sweden.",
      buttonText: 'View Career',
      buttonLink: '/career',
    },
    learning: {
      title: 'Learning',
      mainTitle: 'Aspirations',
      description: "I'm currently mastering Devops concepts. Kubernetes, CI/CD, Helm and more.",
      buttonText: 'View Roadmap',
      buttonLink: 'https://roadmap.sh/devops',
    },
    homelab: {
      title: 'Homelab',
      mainTitle: 'Homelab',
      description: "Where I host this applicaton and other services. It's a place where I can test new technologies and learn new things.",
      buttonText: 'View setup',
      buttonLink: '/lab',
    },
    cat: {
      title: 'Cat?',
      mainTitle: 'Tessa',
      description: "Mandatory cat content. This is Tessa, she's a little over a year old.",
      buttonText: null,
      buttonLink: null,
    },
  },
};
