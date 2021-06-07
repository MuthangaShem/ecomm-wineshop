import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineshopComponent } from './wineshop/wineshop.component';

const routes: Routes = [
  { path: '', component: WineshopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
