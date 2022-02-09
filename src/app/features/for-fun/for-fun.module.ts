import { ForFunRoutingModule } from './for-fun-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForFunComponent } from './for-fun-list/for-fun.component';



@NgModule({
  declarations: [ForFunComponent],
  imports: [
    ForFunRoutingModule,
    CommonModule,
  ]
})
export class ForFunModule { }
