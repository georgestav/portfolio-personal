export interface IPost {
  title: string;
  author: string;
  body: string;
  date?: Date;
  hidden: boolean;
  meta: { votes?: number; tags: string[] };
}
