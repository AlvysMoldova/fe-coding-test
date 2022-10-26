import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from 'src/app/common/services';
import { Post } from '../models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private _apiClient: ApiClient) {}

  getAllPosts(): Observable<Post[]> {
    return this._apiClient
      .get('posts')
      .pipe(map((posts) => posts.map((p) => new Post(p))));
  }
}
