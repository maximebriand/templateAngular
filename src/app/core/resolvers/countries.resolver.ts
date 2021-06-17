import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AlertService } from '../../shared/alert/alert.service';
import { Country } from '../model/country.model';
import { CountryService } from '../services/country.service';

// https://makina-corpus.com/blog/metier/2018/routing-angular-optimisez-le-rendu-au-changement-de-page
@Injectable({
  providedIn: 'root'
})
export class CountriesResolver implements Resolve<string | {}> {

  constructor(
    private countryService: CountryService,
    private alertService: AlertService,
    private router: Router) {
  }

  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Country[]> {
    return this.countryService.getAllCountries()
      .pipe(
        catchError((e, obs) => {
          this.alertService.error(`${e.statusText} ${e.url}`);
          return throwError(e);
        })
      );
  }

}

