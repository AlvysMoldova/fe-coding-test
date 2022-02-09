import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`); 
  }

  public getById(payload: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${payload}`); 
  }

  public createPost(payload: Post): Observable<Post> {
    return this.http.post<Post>(environment.apiUrl, payload);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.apiUrl}/${post.id}`, post);
  }

  public deletePost(payload: number) {
    return this.http.delete(`${environment.apiUrl}/${payload}`);
  }
}
