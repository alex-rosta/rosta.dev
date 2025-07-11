'use client';
import React from 'react';
import Image from 'next/image';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { homelabContent } from '@/data/content/lab';

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-10">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {homelabContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-medium font-bold w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-medium font-bold prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt={item.imageAlt || "homelab image"}
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
