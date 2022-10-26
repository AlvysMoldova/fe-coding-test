import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/common.module';
import { PostsListComponent } from './pages/posts-list';
import { PostsRoutingModule } from './posts-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddEditPostComponent } from './pages/add-edit-post/add-edit-post';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipeModule } from '../common/pipes';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    PostsRoutingModule,
    CommonModule,
    AppCommonModule,
    MatButtonModule,
    MatTooltipModule,
    AngularEditorModule,
    ReactiveFormsModule,
    SafeHtmlPipeModule,
    MatSelectModule,
  ],
  declarations: [PostsListComponent, AddEditPostComponent],
})
export class PostsModule {}
