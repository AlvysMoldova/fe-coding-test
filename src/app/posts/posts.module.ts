import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts-list';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({ imports: [PostsRoutingModule], declarations: [PostsListComponent] })
export class PostsModule {}
