import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DestroyableComponent } from 'src/app/common/components/destroyable-component';
import { Post } from '../../models';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list-component.html',
  styleUrls: ['./posts-list-component.scss'],
})
export class PostsListComponent extends DestroyableComponent implements OnInit {
  posts!: Post[];

  constructor(private _postsService: PostsService) {
    super();
  }

  ngOnInit(): void {
    this._postsService
      .getAllPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
}
