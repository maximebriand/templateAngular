import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'TemplateAngular';

  constructor(
    private router: Router,
    public loaderService: LoaderService) {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          loaderService.setLoaderMessage('Chargement en cours');
          loaderService.setLoadingStatus(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          loaderService.setLoadingStatus(false);
          break;
        }
        default: {
          break;
        }
      }
    });
  }}
