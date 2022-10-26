import { PostsRoute } from './models/posts-route';
import { PostsListComponent } from './posts-list/posts-list-component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

export const PostsRoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild([
    {
      path: '',
      component: PostsListComponent,
    },
    {
      path: '**',
      redirectTo: PostsRoute.Posts,
    },
  ]);
