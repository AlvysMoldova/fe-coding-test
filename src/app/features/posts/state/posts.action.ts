import { Action } from '@ngrx/store';
import { Post } from '../../../models/post.model';
import { Update } from '@ngrx/entity';

export enum PostsActionTypes {
    LOAD_POSTS = '[Post] Load Posts',
    LOAD_POSTS_SUCCESS = '[Post] Load Posts Success',
    LOAD_POSTS_FAIL = '[Post] Load Posts Fail',
    LOAD_POST = '[Post] Load Post',
    LOAD_POST_SUCCESS = '[Post] Load Post Success',
    LOAD_POST_FAIL = '[Post] Load Post Fail',
    CREATE_POST = '[Post] Create Post',
    CREATE_POST_SUCCESS = '[Post] Create Post Success',
    CREATE_POST_FAIL = '[Post] Create Post Fail',
    UPDATE_POST = '[Post] Update Post',
    UPDATE_POST_SUCCESS = '[Post] Update Post Success',
    UPDATE_POST_FAIL = '[Post] Update Post Fail',
    DELETE_POST = '[Post] Delete Post',
    DELETE_POST_SUCCESS = '[Post] Delete Post Success',
    DELETE_POST_FAIL = '[Post] Delete Post Fail',
}

export class LoadPosts implements Action {
    readonly type = PostsActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
    readonly type = PostsActionTypes.LOAD_POSTS_SUCCESS;

    constructor(public payload: Post[]) { }
}

export class LoadPostsFail implements Action {
    readonly type = PostsActionTypes.LOAD_POSTS_FAIL;

    constructor(public payload: string) { }
}




export class LoadPost implements Action {
    readonly type = PostsActionTypes.LOAD_POST;

    constructor(public payload: number) { }
}

export class LoadPostSuccess implements Action {
    readonly type = PostsActionTypes.LOAD_POST_SUCCESS;

    constructor(public payload: Post) { }
}

export class LoadPostFail implements Action {
    readonly type = PostsActionTypes.LOAD_POST_FAIL;

    constructor(public payload: string) { }
}




export class CreatePost implements Action {
    readonly type = PostsActionTypes.CREATE_POST;

    constructor(public payload: Post) { }
}

export class CreatePostSuccess implements Action {
    readonly type = PostsActionTypes.CREATE_POST_SUCCESS;

    constructor(public payload: Post) { }
}

export class CreatePostFail implements Action {
    readonly type = PostsActionTypes.CREATE_POST_FAIL;

    constructor(public payload: string) { }
}




export class UpdatePost implements Action {
    readonly type = PostsActionTypes.UPDATE_POST;

    constructor(public payload: Post) { }
}

export class UpdatePostSuccess implements Action {
    readonly type = PostsActionTypes.UPDATE_POST_SUCCESS;

    constructor(public payload: Update<Post>) { }
}

export class UpdatePostFail implements Action {
    readonly type = PostsActionTypes.UPDATE_POST_FAIL;

    constructor(public payload: string) { }
}


export class DeletePost implements Action {
    readonly type = PostsActionTypes.DELETE_POST;

    constructor(public payload: number) { }
}

export class DeletePostSuccess implements Action {
    readonly type = PostsActionTypes.DELETE_POST_SUCCESS;

    constructor(public payload: number) { }
}

export class DeletePostFail implements Action {
    readonly type = PostsActionTypes.DELETE_POST_FAIL;

    constructor(public payload: string) { }
}


export type Actions =
    LoadPosts |
    LoadPostsSuccess |
    LoadPostsFail |
    LoadPost |
    LoadPostSuccess |
    LoadPostFail | 
    CreatePost |
    CreatePostSuccess | 
    CreatePostFail | 
    UpdatePost | 
    UpdatePostSuccess | 
    UpdatePostFail | 
    DeletePost | 
    DeletePostSuccess | 
    DeletePostFail;
