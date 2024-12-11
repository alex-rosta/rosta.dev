'use client';
import { Tabs } from '@/components/ui/tabs';
import {
  KubernetesContent,
  AboutContent,
  IAMContent,
  HomeLabContent,
} from '@/data/content';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { WavyBackground } from '@/components/ui/wavy-background';
const FlipWords = dynamic(() => import('@/components/ui/flip-words'), {
  ssr: false,
});

const words = [
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
];
export default function TabsDemo() {
  const tabs = [
    {
      title: 'About Me',
      value: 'about',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-900 flex items-center">
          <div className="flex-col flex space-y-2">
            <p>
              <FlipWords
                words={words}
                duration={600}
                className="text-1xl md:text-4xl font-bold text-white"
                suppressHydrationWarning
              />
            </p>
            <Link
              href="/career"
              className="text-sm md:text-lg font-normal mt-2"
            >
              Welcome to my about.me page. I&apos;m a Systems Administrator,
              currently working in Sweden.
              <br />
              <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-m font-medium text-white backdrop-blur-3xl">
                  View Career
                </span>
              </button>
            </Link>
          </div>
          <AboutContent />
        </div>
      ),
    },
    {
      title: 'Learning',
      value: 'learning',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-rose-900 flex items-center">
          <div className="flex-col flex space-y-2">
            <p>Aspirations</p>
            <Link
              href="https://roadmap.sh/devops"
              className="text-sm md:text-lg font-normal mt-2"
            >
              I&apos;m currently mastering Devops concepts. Kubernetes, CI/CD,
              Helm and more.
              <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-m font-medium text-white backdrop-blur-3xl">
                  View Roadmap
                </span>
              </button>
            </Link>
          </div>
          <IAMContent />
        </div>
      ),
    },
    {
      title: 'Homelab',
      value: 'homelab',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center">
          <div className="flex-col flex space-y-2">
            <p>Homelab</p>
            <Link href="/lab" className="text-sm md:text-lg font-normal mt-2">
              Where I host this applicaton and other services. It&apos;s a place
              where I can test new technologies and learn new things.
              <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-m font-medium text-white backdrop-blur-3xl">
                  View setup
                </span>
              </button>
            </Link>
          </div>
          <HomeLabContent />
        </div>
      ),
    },
    {
      title: 'Cat?',
      value: 'cat',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-sky-900 flex items-center">
          <div className="flex-col flex space-y-2">
            <p>Tessa</p>
            <p className="text-sm md:text-lg font-normal mt-2">
              Mandatory cat content. This is Tessa, she&apos;s a little over a
              year old.
            </p>
          </div>
          <KubernetesContent />
        </div>
      ),
    },
  ];

  return (
    <WavyBackground className="absolute inset-0 z-40">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    </WavyBackground>
  );
}
