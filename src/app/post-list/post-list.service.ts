import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';

import { environment } from '../../environments/environment'
import { Post } from './post'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${environment.accessToken}`
    })
};

@Injectable({ providedIn: 'root' })
export class PostListService {
    url = 'api/posts';

    constructor(
        private http: HttpClient
    ) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.url)
    }

    getSingle(postId: number): Observable<Post> {
        return this.http.get<Post>(`${this.url}/${postId}`)
    }

    updatePost(post: Post) {
        return this.http.put<Post>(`${this.url}/${post.id}`, post, httpOptions)
    }

    removePost(id: number) {
        return this.http.delete<number>(`${this.url}/${id}`, httpOptions)
    }
}
