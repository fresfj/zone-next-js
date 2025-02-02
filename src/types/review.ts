import type { IDateValue } from './common';

// ----------------------------------------------------------------------

type IReviewUsers = {
  id: string;
  name: string;
  avatarUrl: string;
};

type IReviewReplyComment = {
  id: string;
  userId: string;
  message: string;
  tagUser?: string;
  createdAt: IDateValue;
};

export type IReviewItemProp = {
  id: string;
  name: string;
  rating: number;
  message: string;
  helpful: number;
  avatarUrl: string;
  createdAt: IDateValue;
  users: IReviewUsers[];
  replyComment: IReviewReplyComment[];
};
