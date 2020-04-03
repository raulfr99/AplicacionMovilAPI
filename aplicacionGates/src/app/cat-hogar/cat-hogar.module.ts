import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatHogarPageRoutingModule } from './cat-hogar-routing.module';

import { CatHogarPage } from './cat-hogar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatHogarPageRoutingModule
  ],
  declarations: [CatHogarPage]
})
export class CatHogarPageModule {}
