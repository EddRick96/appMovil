import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vehiculos/:id', loadChildren: () => import('./pages/vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
  {
    path: 'vehiculos' , loadChildren: () => import('./pages/vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
  {
    path: 'chat-bot',
    loadChildren: () => import('./pages/chat-bot/chat-bot.module').then( m => m.ChatBotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
