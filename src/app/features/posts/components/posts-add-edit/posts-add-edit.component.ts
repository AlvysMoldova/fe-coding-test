import { Post } from './../../../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts-add-edit',
  templateUrl: './posts-add-edit.component.html',
  styleUrls: ['./posts-add-edit.component.scss']
})
export class PostsAddEditComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  public fields: FormlyFieldConfig[] = [];

  public submit: any;

  public model: Post = {
    id: null,
    user_id: null,
    title: '',
    body: '',
  };

  constructor(
    public modalRef: BsModalRef, 
    private toastr: ToastrService) { }

  public ngOnInit(): void {
    this.createFields();
  }

  public onSubmit() {
    if (this.form.valid) {
      const newPost: Post = {
        id: this.model?.id || null,
        user_id: this.model?.user_id || null,
        title: this.form.get('title').value,
        body: this.form.get('body').value,
      };

      this.submit(newPost);
      this.modalRef.hide();
    } else {
      this.toastr.error('Fill the form!');
    }
  }

  public onClose() {
    this.modalRef.hide();
  }

  private createFields(): void {
    this.fields = [
      {
        key: 'title',
        type: 'input',
        className: 'selector',
        templateOptions: {
          label: 'Title',
          placeholder: 'Write something here',
          required: true,
        },
        expressionProperties: {
          'templateOptions.required': '!model.title'
        }
      },
      {
        key: 'body',
        type: 'textarea',
        templateOptions: {
          rows: 10,
          label: 'Body',
          placeholder: 'Write something here',
          required: true,
        },
        expressionProperties: {
          'templateOptions.required': '!model.body'
        }
      },
    ];
  }
}
