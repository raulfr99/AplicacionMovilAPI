import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatTareasPageRoutingModule } from './cat-tareas-routing.module';

import { CatTareasPage } from './cat-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatTareasPageRoutingModule
  ],
  declarations: [CatTareasPage]
})
export class CatTareasPageModule {}
