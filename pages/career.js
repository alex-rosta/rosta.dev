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
      <div className="max-w-4xl mx-auto mb-16 text-center mt-8 md:mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            Career Journey
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto transform transition-all duration-700 hover:scale-105 animate-slide-up">
          From support engineer to systems automation specialist - explore my professional evolution 
          through healthcare, cloud infrastructure, and enterprise solutions.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="group flex items-center space-x-2 bg-green-50 dark:bg-gray-800 px-4 py-2 rounded-full border border-green-200 dark:border-green-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
              Currently at Cambio Group
            </span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="animate-fade-in-up delay-300">
        <Timeline data={data} />
      </div>
    </div>
  );
}
