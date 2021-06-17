import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../model/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryHttp {
  REST_API: string;

  constructor(protected httpClient: HttpClient) {
    this.REST_API = 'https://restcountries.eu/rest/v2';
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.REST_API}/all`, { responseType: 'json' });
  }
  
  getOneCountry(countryName: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.REST_API}/name/${countryName}`, { responseType: 'json' });
  }
}
