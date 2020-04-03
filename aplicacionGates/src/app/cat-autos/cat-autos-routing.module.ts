import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatAutosPage } from './cat-autos.page';

const routes: Routes = [
  {
    path: '',
    component: CatAutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatAutosPageRoutingModule {}
