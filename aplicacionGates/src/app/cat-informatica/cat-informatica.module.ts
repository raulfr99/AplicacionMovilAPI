import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatInformaticaPageRoutingModule } from './cat-informatica-routing.module';

import { CatInformaticaPage } from './cat-informatica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatInformaticaPageRoutingModule
  ],
  declarations: [CatInformaticaPage]
})
export class CatInformaticaPageModule {}
