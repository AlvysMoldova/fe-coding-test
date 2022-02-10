import { AuthGuard } from './../../guards/auth.guard';
import { ForFunComponent } from './for-fun-list/for-fun.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ForFunComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForFunRoutingModule { }
