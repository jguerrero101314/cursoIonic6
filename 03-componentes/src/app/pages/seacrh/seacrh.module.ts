import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeacrhPageRoutingModule } from './seacrh-routing.module';

import { SeacrhPage } from './seacrh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeacrhPageRoutingModule
  ],
  declarations: [SeacrhPage]
})
export class SeacrhPageModule {}
