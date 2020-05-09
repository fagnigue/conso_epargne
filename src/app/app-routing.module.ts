import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
  },
  {
    path: 'signin1',
    loadChildren: () => import('./signin1/signin1.module').then( m => m.Signin1PageModule)
  },
  {
    path: 'signin2',
    loadChildren: () => import('./signin2/signin2.module').then( m => m.Signin2PageModule)
  },
  {
    path: 'signin3',
    loadChildren: () => import('./signin3/signin3.module').then( m => m.Signin3PageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
