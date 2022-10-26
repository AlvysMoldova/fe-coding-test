import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private _pageIndex = 1;
  protected posts!: Post[];

  constructor(
    private _postsService: PostsService,
    private _lazyDialog: LazyLoadedDialogService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this._loadPosts();
  }

  deletePost(postId: number) {
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
                    this._postsService.deletePost(postId),
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

  editPost(postId: number) {
    this._router.navigate(['/', 'posts', 'edit', postId]);
  }

  handleScroll(event) {
    //top of the page reached
    if (!event.target.scrollTop && this._pageIndex >= 2) {
      this._pageIndex--;
      this._loadPosts();
    }

    //bottom of the page reached
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight - 1
    ) {
      this._pageIndex++;
      this._loadPosts();
    }
  }

  private _loadPosts() {
    this._postsService
      .getAllPosts(this._pageIndex)
      .pipe(first())
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
}
