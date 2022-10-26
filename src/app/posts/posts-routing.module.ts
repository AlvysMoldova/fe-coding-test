import { PostsRoute } from './models/posts-route';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from './pages/posts-list';

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
