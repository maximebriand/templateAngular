import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './components/error-pages/notfound/notfound.component';
import { UnauthorizedComponent } from './components/error-pages/unauthorized/unauthorized.component';


const routes: Routes = [
  {
    path: '',
    loadChildren:
      () => import('./components/components.module')
        .then(m => m.ComponentModule)
  },
  {
    path: 'non-autorise', component: UnauthorizedComponent,
  },
  {
    path: '**', component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
