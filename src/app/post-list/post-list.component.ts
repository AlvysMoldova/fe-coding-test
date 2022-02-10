import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  providers: [PostListService],
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postListService: PostListService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postListService.getPosts()
        .subscribe(posts => (this.posts = posts));
  }
}
