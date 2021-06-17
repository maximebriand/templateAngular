import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesResolver } from '../../core/resolvers/countries.resolver';
import { CountryResolver } from '../../core/resolvers/country.resolver';
import { CountryComponent } from './country/country.component';
import { ListePaysComponent } from './liste-pays.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: ListePaysComponent,
    // canActivate: [LoginGuard],
    resolve: {countries: CountriesResolver},
  },
  {
    path: 'country/:country',
    component: CountryComponent,
    // canActivate: [LoginGuard],
    resolve: {country: CountryResolver},
  },
  

];

export const HomeRoutesModule = RouterModule.forChild(homeRoutes);


@NgModule({
  declarations: [
    ListePaysComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutesModule
  ]
})
export class ListePaysModule { }
