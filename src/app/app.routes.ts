import { Routes } from "@angular/router";
import { AuthenticatedGuard } from "./guards/authenticated.guard";

export const AppRoutes: Routes = [
  // cada objeto das rotas tem suas propriedades - path caminho para acessar
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
    canLoad: [AuthenticatedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  }
]
