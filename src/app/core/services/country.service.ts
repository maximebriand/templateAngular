import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryHttp } from '../http/country.http';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private countryHttp: CountryHttp) { }

  getAllCountries(): Observable<Country[]>{
    return this.countryHttp.getAllCountries();
  }

  getOneCountry(countryName): Observable<Country>{
    console.log(countryName)
    return this.countryHttp.getOneCountry(countryName);
  }

}
