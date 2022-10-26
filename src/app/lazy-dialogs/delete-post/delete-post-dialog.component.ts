import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Component, NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.scss'],
})
export class DeletePostDialogComponent {
  constructor(private _dialogRef: MatDialogRef<DeletePostDialogComponent>) {}

  deletePost() {
    this._dialogRef.close(true);
  }
}

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatDividerModule],
  declarations: [DeletePostDialogComponent],
})
export class DeletePostDialogModule {}
