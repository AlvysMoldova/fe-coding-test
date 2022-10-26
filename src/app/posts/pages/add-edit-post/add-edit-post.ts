import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { combineLatest, of, switchMap } from 'rxjs';
import { User } from 'src/app/users/models';
import { UsersService } from 'src/app/users/services';
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
  private _action!: 'edit' | 'add';

  protected readonly titleEditorConfig: AngularEditorConfig = titleEditorConfig;
  protected readonly contentEditorConfig: AngularEditorConfig =
    contentEditorConfig;

  postAuthorId!: number;
  users!: User[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postsService: PostsService,
    private _usersService: UsersService
  ) {}

  postForm = new FormGroup({
    user_id: new FormControl(NaN, Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this._action = this._router.url.match(/edit/) ? 'edit' : 'add';

    if (this._action === 'edit') {
      this._postsService
        .getPost(this._postId)
        .pipe(
          switchMap((post) =>
            combineLatest([
              of(post),
              this._usersService.getUser(post.user_id),
              this._usersService.getAllUsers(),
            ])
          )
        )
        .subscribe(([{ user_id, title, body }, currentUser, users]) => {
          this.users = [...users, currentUser];
          this.postAuthorId = user_id;
          this.postForm.setValue({
            user_id,
            title,
            body,
          });
        });
    } else {
      this._usersService.getAllUsers().subscribe((users) => {
        this.users = users;
      });
    }
  }

  saveChanges() {
    if (this._action === 'edit') {
      this._postsService
        .editPost(this._postId, this.postForm.value as PostDto)
        .subscribe(() => {
          this._router.navigate(['posts']);
        });
    } else if (this._action === 'add') {
      this._postsService
        .addPost(this.postForm.value as PostDto)
        .subscribe(() => {
          this._router.navigate(['posts']);
        });
    }
  }

  control(control: 'user_id' | 'title' | 'body') {
    return this.postForm.get(control);
  }
}
