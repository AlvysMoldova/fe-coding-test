import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then((m) => m.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'for-fun',
    loadChildren: () => import('./features/for-fun/for-fun.module').then((m) => m.ForFunModule),
    canActivate: [AuthGuard],
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
