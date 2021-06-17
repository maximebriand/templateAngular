import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LoaderService } from '../../core/services/loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  @Input() loading: boolean;
  @Input() loaderMessage: string;

  constructor(private loaderService: LoaderService) { }

  onCancel() {
    this.loaderService.setLoadingStatus(false);
  }

}

