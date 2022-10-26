import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from 'src/app/common/services';
import { Post, PostDto } from '../models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private _apiClient: ApiClient) {}

  getPost(postId: number): Observable<Post> {
    return this._apiClient
      .get(`posts/${postId}`)
      .pipe(map((post) => new Post(post)));
  }

  getAllPosts(): Observable<Post[]> {
    return this._apiClient
      .get('posts')
      .pipe(map((posts) => posts.map((p) => new Post(p))));
  }

  editPost(postId: number, body: PostDto) {
    return this._apiClient.patch(`posts/${postId}`, body);
  }

  deletePost(postId: number) {
    return this._apiClient.delete(`posts/${postId}`);
  }
}
