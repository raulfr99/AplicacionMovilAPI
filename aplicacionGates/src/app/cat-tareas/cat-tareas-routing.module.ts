import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatTareasPage } from './cat-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: CatTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatTareasPageRoutingModule {}
