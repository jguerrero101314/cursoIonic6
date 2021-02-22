import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeacrhPageRoutingModule } from './seacrh-routing.module';

import { SeacrhPage } from './seacrh.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeacrhPageRoutingModule,
    PipesModule
  ],
  declarations: [SeacrhPage]
})
export class SeacrhPageModule {}
