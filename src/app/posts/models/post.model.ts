export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export type PostDto = Pick<Post, 'user_id' | 'title' | 'body'>;
