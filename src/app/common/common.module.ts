import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar';

@NgModule({
  imports: [RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class CommonModule {}
