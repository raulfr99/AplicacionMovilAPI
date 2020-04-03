import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'calificar/:id',
    loadChildren: () => import('./calificar/calificar.module').then( m => m.CalificarPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'cat-autos',
    loadChildren: () => import('./cat-autos/cat-autos.module').then( m => m.CatAutosPageModule)
  },
  {
    path: 'cat-hogar',
    loadChildren: () => import('./cat-hogar/cat-hogar.module').then( m => m.CatHogarPageModule)
  },
  {
    path: 'cat-informatica',
    loadChildren: () => import('./cat-informatica/cat-informatica.module').then( m => m.CatInformaticaPageModule)
  },
  {
    path: 'cat-tareas',
    loadChildren: () => import('./cat-tareas/cat-tareas.module').then( m => m.CatTareasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
