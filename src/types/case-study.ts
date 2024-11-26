import type { IDateValue } from './common';
import type { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ICaseStudyProps = {
  id: string;
  title: string;
  heroUrl: string;
  website: string;
  content: string;
  category: string;
  coverUrl: string;
  description: string;
  createdAt: IDateValue;
  galleryImgs: string[];
  socialLinks?: ISocialLinks;
};
