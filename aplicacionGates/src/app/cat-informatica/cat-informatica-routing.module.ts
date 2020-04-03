import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatInformaticaPage } from './cat-informatica.page';

const routes: Routes = [
  {
    path: '',
    component: CatInformaticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatInformaticaPageRoutingModule {}
