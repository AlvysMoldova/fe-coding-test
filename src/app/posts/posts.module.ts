import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/common.module';
import { PostsListComponent } from './pages/posts-list';
import { PostsRoutingModule } from './posts-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    PostsRoutingModule,
    CommonModule,
    AppCommonModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [PostsListComponent],
})
export class PostsModule {}
