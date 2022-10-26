import { Component, OnInit } from '@angular/core';
import { combineLatest, first, of, switchMap } from 'rxjs';
import { DestroyableComponent } from 'src/app/common/components/destroyable-component';
import { LazyLoadedDialogService } from 'src/app/common/services';
import { Post } from '../../models';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list-component.html',
  styleUrls: ['./posts-list-component.scss'],
})
export class PostsListComponent extends DestroyableComponent implements OnInit {
  posts!: Post[];

  constructor(
    private _postsService: PostsService,
    private _lazyDialog: LazyLoadedDialogService
  ) {
    super();
  }

  ngOnInit(): void {
    this._loadPosts();
  }

  deletePost(id: number) {
    this._lazyDialog
      .openDialog(import('src/app/lazy-dialogs/delete-post'))
      .then((ref) =>
        ref
          .afterClosed()
          .pipe(
            switchMap((confirmed) =>
              confirmed
                ? combineLatest([
                    of(confirmed),
                    this._postsService.deletePost(id),
                  ])
                : of([])
            )
          )
          .subscribe(([confirmed]) => {
            if (confirmed) {
              this._loadPosts();
            }
          })
      );
  }

  private _loadPosts() {
    this._postsService
      .getAllPosts()
      .pipe(first())
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
}
