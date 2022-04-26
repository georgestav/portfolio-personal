import { IResponseDeletedItem } from './GeneralTypes';

export interface IPost {
  title: string;
  author: string;
  body: string;
  published: boolean;
  votes?: number;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPostOptional {
  title?: string;
  author?: string;
  body?: string;
  published?: boolean;
  votes?: number;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFetchedPosts extends IPost {
  posts: IPost[];
}

export interface IDeletedPost extends IPost, IResponseDeletedItem {}
