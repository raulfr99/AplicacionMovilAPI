import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatHogarPage } from './cat-hogar.page';

const routes: Routes = [
  {
    path: '',
    component: CatHogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatHogarPageRoutingModule {}
