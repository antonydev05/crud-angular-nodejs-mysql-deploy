import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importamos el componente de listar juegos
import { GameListComponent } from './components/game-list/game-list.component'

import { GameFormComponent } from './components/game-form/game-form.component'

const routes: Routes = [
  // Aqui van las rutas
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
