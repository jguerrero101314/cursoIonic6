import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeacrhPage } from './seacrh.page';

const routes: Routes = [
  {
    path: '',
    component: SeacrhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeacrhPageRoutingModule {}
