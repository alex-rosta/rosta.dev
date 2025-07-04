import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { careerTimelineData } from '@/data/content/career';
import CareerTimelineItem from '@/components/CareerTimelineItem';

export default function TimelineDemo() {
  const data = careerTimelineData.map((item) => ({
    title: item.title,
    content: <CareerTimelineItem item={item} />,
  }));
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
