import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostsService } from "src/app/services/posts.service";
import * as postsActions from '../state/posts.action';
import { Post } from "src/app/models/post.model";

@Injectable()
export class PostsEffect {
    constructor(
        private actions$: Actions,
        private postsService: PostsService,
    ) {
    }

    @Effect()
    loadPosts$: Observable<Action> = this.actions$.pipe(
        ofType<postsActions.LoadPosts>(postsActions.PostsActionTypes.LOAD_POSTS),
        mergeMap((actions: postsActions.LoadPosts) =>
            this.postsService.get().pipe(map((posts: Post[]) => new postsActions.LoadPostsSuccess(posts))),
        ),
        catchError(err => of(new postsActions.LoadPostsFail(err))),
    )

    @Effect()
    loadPost$: Observable<Action> = this.actions$.pipe(
        ofType<postsActions.LoadPost>(postsActions.PostsActionTypes.LOAD_POST),
        mergeMap((action: postsActions.LoadPost) =>
            this.postsService.getById(action.payload).pipe(map((post: Post) => new postsActions.LoadPostSuccess(post))),
        ),
        catchError(err => of(new postsActions.LoadPostFail(err))),
    )

    @Effect()
    createPost$: Observable<Action> = this.actions$.pipe(
        ofType<postsActions.CreatePost>(postsActions.PostsActionTypes.CREATE_POST),
        map((action: postsActions.CreatePost) => action.payload),
        mergeMap((post: Post) =>
            this.postsService.createPost(post).pipe(map((newPost: Post) => new postsActions.CreatePostSuccess(newPost))),
        ),
        catchError(err => of(new postsActions.CreatePostFail(err))),
    )

    @Effect()
    updatePost$: Observable<Action> = this.actions$.pipe(
        ofType<postsActions.UpdatePost>(postsActions.PostsActionTypes.UPDATE_POST),
        map((action: postsActions.UpdatePost) => action.payload),
        mergeMap((post: Post) =>
            this.postsService.updatePost(post).pipe(map((updatePost: Post) => new postsActions.UpdatePostSuccess({
                id: updatePost.id,
                changes: updatePost,
            }))),
        ),
        catchError(err => of(new postsActions.UpdatePostFail(err))),
    )

    @Effect()
    deletePost$: Observable<Action> = this.actions$.pipe(
        ofType<postsActions.DeletePost>(postsActions.PostsActionTypes.DELETE_POST),
        map((action: postsActions.DeletePost) => action.payload),
        mergeMap((id: number) =>
            this.postsService.deletePost(id).pipe(map(() => new postsActions.DeletePostSuccess(id))),
        ),
        catchError(err => of(new postsActions.DeletePostFail(err))),
    )

} 