import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    canActivate: [],
    // resolve: { habilitation: HabilitationResolver },
    loadChildren:
      () => import('./home/home.module')
        .then(m => m.HomeModule)
  },
];

export const ComponentsRoutingModule = RouterModule.forChild(routes);
