import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signin3Page } from './signin3.page';

const routes: Routes = [
  {
    path: '',
    component: Signin3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signin3PageRoutingModule {}
