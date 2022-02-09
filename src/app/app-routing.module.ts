import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'for-fun',
    loadChildren: () => import('./features/for-fun/for-fun.module').then((m) => m.ForFunModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
