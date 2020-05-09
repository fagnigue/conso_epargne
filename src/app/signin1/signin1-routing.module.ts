import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signin1Page } from './signin1.page';

const routes: Routes = [
  {
    path: '',
    component: Signin1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signin1PageRoutingModule {}
