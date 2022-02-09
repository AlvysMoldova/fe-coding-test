import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsAddEditComponent } from './components/posts-add-edit/posts-add-edit.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { PostsEffect } from './state/posts.effects'; 
import { EffectsModule, Actions } from '@ngrx/effects';

@NgModule({
  declarations: [
    PostsListComponent, 
    PostsAddEditComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffect])
  ]
})
export class PostsModule { }
