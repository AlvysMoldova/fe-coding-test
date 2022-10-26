import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from 'src/app/common/services';
import { Post, PostDto } from '../models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private _apiClient: ApiClient) {}

  getPost(postId: number): Observable<Post> {
    return this._apiClient.get(`posts/${postId}`).pipe(map((p) => p as Post));
  }

  getAllPosts(): Observable<Post[]> {
    return this._apiClient
      .get('posts')
      .pipe(map((posts) => posts.map((p) => p as Post)));
  }

  addPost(post: PostDto) {
    return this._apiClient.post('posts', post);
  }

  editPost(postId: number, body: PostDto) {
    return this._apiClient.patch(`posts/${postId}`, body);
  }

  deletePost(postId: number) {
    return this._apiClient.delete(`posts/${postId}`);
  }
}
