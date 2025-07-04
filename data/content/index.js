// Content Index - Central export for all content modules
// This makes it easy to import content from anywhere in the application

export { careerTimelineData } from './career';
export { homelabContent } from './lab';
export { aboutPageContent } from './about';

// Export components from content.js
export { 
  AboutContent, 
  IAMContent, 
  KubernetesContent, 
  HomeLabContent 
} from '../content';
