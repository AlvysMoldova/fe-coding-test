import { Store } from '@ngrx/store';
import { PostsService } from 'src/app/services/posts.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Post } from './../../../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmComponent } from '../confim/confirm.component';
import * as postsActions from '../../../features/posts/state/posts.action';
import * as fromPosts from '../../../features/posts/state/posts.reducer';


interface TableColumns {
  name: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input()
  public posts: Post[];

  public modalRef: BsModalRef;

  public showActionsButton: any;

  public page: number = 1;

  public tableColumns: TableColumns[] = [
    { name: 'id' },
    { name: 'title' },
    { name: 'body' },
  ];

  constructor(
    private modalService: BsModalService,
    private postsService: PostsService,
    private store: Store<fromPosts.AppState>,
  ) {

  }

  public ngOnInit(): void {
    console.log(this.posts);
  }

  public isActionVisible(index) {
    return this.showActionsButton === index;
  }

  public toggleActions(show, index) {
    this.showActionsButton = show ? index : undefined;
  }

  public deletePost(id: number): void {
    this.modalRef = this.modalService.show(ConfirmComponent, {});

    this.modalRef.content.submit = (toDelete) => {
      if (toDelete) {
        this.store.dispatch(new postsActions.DeletePost(id));
      }
    };
  }

  public editPost(post: Post): void {
    this.postsService.addEditPost(post);
  }
}
