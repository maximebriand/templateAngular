import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    loadChildren:
      () => import('./home/home.module')
        .then(m => m.HomeModule)
  },
  {
    path: 'countries',
    loadChildren:
      () => import('./liste-pays/liste-pays.module')
        .then(m => m.ListePaysModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

export const ComponentsRoutingModule = RouterModule.forChild(routes);
