import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostDto } from '../../models';
import { PostsService } from '../../services/posts.service';
import { titleEditorConfig, contentEditorConfig } from './editor-config';

@Component({
  selector: 'add-edit-post',
  templateUrl: './add-edit-post.html',
  styleUrls: ['./add-edit-post.scss'],
})
export class AddEditPostComponent implements OnInit {
  private readonly _postId = Number(this._route.snapshot.paramMap.get('id'));
  protected readonly titleEditorConfig: AngularEditorConfig = titleEditorConfig;
  protected readonly contentEditorConfig: AngularEditorConfig =
    contentEditorConfig;

  constructor(
    private _postsService: PostsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this._postsService.getPost(this._postId).subscribe(({ title, body }) => {
      this.postForm.setValue({
        title,
        body,
      });
    });
  }

  saveChanges() {
    console.log(this.postForm.value);
    this._postsService
      .editPost(this._postId, this.postForm.value as PostDto)
      .subscribe(() => {
        this._router.navigate(['posts']);
      });
  }
}
