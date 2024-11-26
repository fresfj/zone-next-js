import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type ITestimonialProps = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  ratingNumber: number;
  createdAt: IDateValue;
};
