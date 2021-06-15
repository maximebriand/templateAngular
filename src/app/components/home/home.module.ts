import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // resolve: { motifs: HomepageResolver },
  },

];

export const HomeRoutesModule = RouterModule.forChild(homeRoutes);


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutesModule
  ]
})
export class HomeModule { }
