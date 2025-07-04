// About Page Content
// This file contains all about page content that can be easily updated

export const aboutPageContent = {
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
  tabs: [
    {
      title: 'About Me',
      value: 'about',
      gradient: 'from-green-700 to-green-900',
      content: {
        title: 'About Me',
        description: "Welcome to my about.me page. I'm a Systems Engineer, currently working in Sweden.",
        buttonText: 'View Career',
        buttonLink: '/career',
        imageUrl: 'https://i.postimg.cc/DZNC6H4D/processed-B30-E3881-60-F2-474-D-A014-B7895-EBAA0-BB-1.jpg'
      }
    },
    {
      title: 'Learning',
      value: 'learning',
      gradient: 'from-pink-700 to-rose-900',
      content: {
        title: 'Aspirations',
        description: "I'm currently mastering Devops concepts. Kubernetes, CI/CD, Helm and more.",
        buttonText: 'View Roadmap',
        buttonLink: 'https://roadmap.sh/devops',
        imageUrl: '/images/devops.jpg'
      }
    },
    {
      title: 'Homelab',
      value: 'homelab',
      gradient: 'from-yellow-500 to-yellow-700',
      content: {
        title: 'Homelab',
        description: "Where I host this applicaton and other services. It's a place where I can test new technologies and learn new things.",
        buttonText: 'View setup',
        buttonLink: '/lab',
        imageUrl: '/images/homelab.webp'
      }
    },
    {
      title: 'Cat?',
      value: 'cat',
      gradient: 'from-blue-700 to-sky-900',
      content: {
        title: 'Tessa',
        description: "Mandatory cat content. This is Tessa, she's my cat.",
        buttonText: null,
        buttonLink: null,
        imageUrl: '/images/tessa.jpg'
      }
    }
  ]
};
