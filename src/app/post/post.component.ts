import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { PostListService } from "../post-list/post-list.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostListService],
})

export class PostComponent implements OnInit {
  loaded: boolean = false;

  post = { id: -1, user_id: -1, title: '', body: '' };
  postForm = this.formBuilder.group({
    title: '',
    body: ''
  });

  constructor(
      public router: Router,
      private route: ActivatedRoute,
      private postListService: PostListService,
      private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('postId')
    this.postListService.getSingle(Number(id))
        .subscribe((post) => {
          const { title, body } = post
          this.loaded = true
          this.post = post
          this.postForm.setValue({ title, body })
        });
  }

  onSubmit(): void {
    this.postListService.updatePost(this.post)
      .subscribe(() => {
          this.router.navigate(['/posts'], { relativeTo: this.route }).
          then(() => alert('Post successfully updated'));
      });
  }

  onRemove(): void {
    this.postListService.removePost(this.post.id)
      .subscribe(() => {
        this.router.navigate(['/posts'], { relativeTo: this.route }).
        then(() => alert('Post successfully removed'));
      });
  }
}
