import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signin3PageRoutingModule } from './signin3-routing.module';

import { Signin3Page } from './signin3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signin3PageRoutingModule
  ],
  declarations: [Signin3Page]
})
export class Signin3PageModule {}
