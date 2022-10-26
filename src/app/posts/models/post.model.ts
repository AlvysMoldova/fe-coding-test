export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(post) {
    this.id = post.id;
    this.userId = post.user_id;
    this.title = post.title;
    this.body = post.body;
  }
}

export interface PostDto {
  title: string;
  body: string;
}
