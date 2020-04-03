import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatAutosPageRoutingModule } from './cat-autos-routing.module';

import { CatAutosPage } from './cat-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatAutosPageRoutingModule
  ],
  declarations: [CatAutosPage]
})
export class CatAutosPageModule {}
