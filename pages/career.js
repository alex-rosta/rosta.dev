import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { careerTimelineData } from '@/data/content/career';
import CareerTimelineItem from '@/components/CareerTimelineItem';

export default function CareerPage() {
  const data = careerTimelineData.map((item) => ({
    title: item.title,
    content: <CareerTimelineItem item={item} />,
  }));

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center mt-16">
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          From support engineer to systems automation specialist - explore my professional evolution 
          through healthcare, cloud infrastructure, and enterprise solutions.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Currently at Cambio Group
            </span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={data} />
    </div>
  );
}
