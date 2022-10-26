import { AddEditPostComponent } from './pages/add-edit-post/add-edit-post';
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
      path: 'edit',
      children: [
        {
          path: ':id',
          component: AddEditPostComponent,
        },
      ],
    },
    {
      path: '**',
      redirectTo: '',
    },
  ]);
