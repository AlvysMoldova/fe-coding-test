import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsAddEditComponent } from '../features/posts/components/posts-add-edit/posts-add-edit.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as postsActions from '../features/posts/state/posts.action';
import * as fromPosts from '../features/posts/state/posts.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public modalRef: BsModalRef;

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private store: Store<fromPosts.AppState>,
  ) { }

  public get(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`); 
  }

  public getById(payload: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${payload}`); 
  }

  public createPost(payload: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/posts`, payload);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.apiUrl}/posts/${post.id}`, post);
  }

  public deletePost(payload: number) {
    return this.http.delete(`${environment.apiUrl}/posts/${payload}`);
  }

  public addEditPost(post?: Post) {
    this.modalRef = this.modalService.show(PostsAddEditComponent,  {
      initialState: {
        model: post || null,
      }
    });

    this.modalRef.content.submit = (post: Post) => {
      if (post.id) {
        this.store.dispatch(new postsActions.UpdatePost(post));
      } else {
        this.store.dispatch(new postsActions.CreatePost(post));
      }
    };
  }
}
