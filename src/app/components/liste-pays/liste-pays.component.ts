import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../../core/model/country.model';

@Component({
  selector: 'app-liste-pays',
  templateUrl: './liste-pays.component.html'
})
export class ListePaysComponent implements OnInit {
  countries: Country[];
  
  constructor(private activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.countries = this.activatedRoute.snapshot.data.countries;
  }

}
