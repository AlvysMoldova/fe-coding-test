import { Post } from './../../../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'ngx-bs-modal';
import { ConfirmComponent } from '../confim/confirm.component';

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

  public showActionsButton: any;

  public tableColumns: TableColumns[] = [
    { name: 'id' },
    { name: 'title' },
    { name: 'body' },
  ];

  constructor(private dialogService: DialogService) {

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
    console.log(id);
    this.dialogService.addDialog(ConfirmComponent, {
      title: '',
      message: 'Are you sure?'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        alert('accepted');
      }
    });
  }
}
