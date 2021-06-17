import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../../../core/model/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  country: Country;
  
  constructor(private activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.country = this.activatedRoute.snapshot.data.country[0];
  }

}
