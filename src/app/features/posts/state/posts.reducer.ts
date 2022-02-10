import { Post } from './../../../models/post.model';
import * as postsActions from './posts.action';
import * as fromRoot from '../../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface PostsState extends EntityState<Post> {
    selectedPostId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    posts: PostsState,
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const defaultPost: PostsState = {
    ids: [],
    entities: {},
    selectedPostId: null,
    loading: false,
    loaded: false,
    error: '',
};

export const initialState: PostsState = postsAdapter.getInitialState(defaultPost);

export function postsReducer(state = initialState, action: postsActions.Actions): PostsState {
    switch (action.type) {
        case postsActions.PostsActionTypes.LOAD_POSTS_SUCCESS: {
            return postsAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true,
            })
        }

        case postsActions.PostsActionTypes.LOAD_POSTS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload,
            }
        }

        case postsActions.PostsActionTypes.LOAD_POST_SUCCESS: {
            return postsAdapter.addOne(action.payload, {
                ...state,
                selectedPostId: action.payload.id,
            })
        }

        case postsActions.PostsActionTypes.LOAD_POST_FAIL: {
            return {
                ...state,
                error: action.payload,
            }
        }

        case postsActions.PostsActionTypes.CREATE_POST_SUCCESS: {
            return postsAdapter.addOne(action.payload, state)
        }

        case postsActions.PostsActionTypes.CREATE_POST_FAIL: {
            return {
                ...state,
                error: action.payload,
            }
        }

        case postsActions.PostsActionTypes.UPDATE_POST_SUCCESS: {
            return postsAdapter.updateOne(action.payload, state)
        }

        case postsActions.PostsActionTypes.UPDATE_POST_FAIL: {
            return {
                ...state,
                error: action.payload,
            }
        }

        case postsActions.PostsActionTypes.DELETE_POST_SUCCESS: {
            return postsAdapter.removeOne(action.payload, state)
        }

        case postsActions.PostsActionTypes.DELETE_POST_FAIL: {
            return {
                ...state,
                error: action.payload,
            }
        }

        default: {
            return state;
        }
    }
}

const getPostsFeatureState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(
    getPostsFeatureState,
    postsAdapter.getSelectors().selectAll,
);

export const getPostsLoading = createSelector(
    getPostsFeatureState,
    (state: PostsState) => state.loading,
);

export const getPostsLoaded = createSelector(
    getPostsFeatureState,
    (state: PostsState) => state.loaded,
);

export const getError = createSelector(
    getPostsFeatureState,
    (state: PostsState) => state.error,
);

export const getCurrentPostId = createSelector(
    getPostsFeatureState,
    (state: PostsState) => state.selectedPostId, 
);

export const getCurrentPost = createSelector(
    getPostsFeatureState,
    getCurrentPostId,
    state => state.entities[state.selectedPostId],
);