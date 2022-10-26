import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'posts',
    title: 'Posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
];

export const RootRouting: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes, {
    // enableTracing: true,
  });
