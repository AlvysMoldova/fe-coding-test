import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/common.module';
import { PostsListComponent } from './pages/posts-list';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [PostsRoutingModule, CommonModule, AppCommonModule],
  declarations: [PostsListComponent],
})
export class PostsModule {}
