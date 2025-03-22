import React from 'react';
import { Vortex } from '@/components/ui/vortex';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Link from 'next/link';

export default function VortexDemoSecond() {
  const words = [
    {
      text: 'rosta.dev',
      className: 'text-white text-2xl md:text-6xl font-bold text-center',
    },
  ];
  return (
    <div className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={1000}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <TypewriterEffectSmooth words={words} />
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          welcome to my page! have a look around and see what I&apos;m up to.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link
            href="/about"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Let&apos;s go!
          </Link>
        </div>
      </Vortex>
    </div>
  );
}
