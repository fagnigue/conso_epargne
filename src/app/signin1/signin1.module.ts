import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signin1PageRoutingModule } from './signin1-routing.module';

import { Signin1Page } from './signin1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signin1PageRoutingModule
  ],
  declarations: [Signin1Page]
})
export class Signin1PageModule {}
