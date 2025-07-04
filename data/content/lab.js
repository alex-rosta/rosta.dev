// Homelab Content
// This file contains all homelab-related content that can be easily updated

export const homelabContent = [
  {
    badge: 'Hardware',
    title: 'Intel NUC Infrastructure',
    description: 'For hardware three Intel NUCs are used. The NUCs are equipped with 96GB of RAM and 1TB of SSD Nvme storage. The NUCs are running on Intel Core Ultra 5 processors with 14 cores.',
    image: '/images/nuc14.jpg',
    imageAlt: 'Intel NUC 14 hardware'
  },
  {
    badge: 'Virtualization',
    title: 'VMware ESXi Platform',
    description: 'The obvious choice for the hypervisor is VMware ESXi. As a member of the VMware User Group "VMUG" I have access to the latest software and updates. The NUCs are running on ESXi 8.0 with a vCenter 8.0 server for manageability. A cluster is created with the three NUCs for high availability and redundancy, automatic vMotion and DRS.',
    image: '/images/vmware.jpeg',
    imageAlt: 'VMware ESXi virtualization'
  },
  {
    badge: 'K3s Platform',
    title: 'Kubernetes Cluster',
    description: 'My K3s cluster consists of three nodes, one master and two workers. The operating system is Ubuntu 22.04 LTS. Every node has two cores of CPU and 8gb of RAM, running about 15-30 pods based on the workload at the time. In fact, this website is running on the K3s cluster right now!',
    image: '/images/k3s.jpg',
    imageAlt: 'K3s Kubernetes cluster'
  },
  {
    badge: 'Rancher',
    title: 'Cluster Management',
    description: 'Rancher is used for managing the K3s cluster graphically. Although it\'s useful to deploy straight from the CLI with yaml files, Rancher provides a nice overview of the cluster and the workloads.',
    image: '/images/rancher.jpg',
    imageAlt: 'Rancher management interface'
  },
  {
    badge: 'Grafana',
    title: 'Monitoring & Visualization',
    description: 'Choice of monitoring is Grafana paired with Prometheus for K3s and InfluxDB for the ESXi cluster. Grafana is used for visualizing the data and creating dashboards for the clusters.',
    image: '/images/grafana.png',
    imageAlt: 'Grafana monitoring dashboard'
  },
  {
    badge: 'Cloudflare',
    title: 'Edge & Security',
    description: 'To access the homelab from the outside, Cloudflare is used for DDNS and reverse proxy. The homelab is behind a Cloudflare proxy for security, performance and geoblocking.',
    image: '/images/cloudflare.webp',
    imageAlt: 'Cloudflare edge services'
  },
  {
    badge: 'OAuth2.0',
    title: 'Authentication',
    description: 'Authentication is handled by Github using OAuth2.0. This way I can use my Github account secured with multi-factor authentication to access the externally exposed services.',
    image: '/images/oauth.png',
    imageAlt: 'OAuth2.0 authentication'
  }
];
