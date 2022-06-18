import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  // cada objeto das rotas tem suas propriedades - path caminho para acessar
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(n => n.LoginModule)
  }
]
