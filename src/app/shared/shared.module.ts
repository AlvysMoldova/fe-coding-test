import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslatePipe } from './pipes/translate.pipe';


@NgModule({
  declarations: [
    DataTableComponent,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    DataTableComponent,
    TranslatePipe,
  ],
})
export class SharedModule { }
