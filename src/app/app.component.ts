import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    '../assets/metronic@4.5.5/sass/layouts/layout/themes/darkblue.scss',
    '../assets/metronic@4.5.5/sass/bootstrap.scss',
    '../assets/metronic@4.5.5/sass/global/components.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'demoUI';
}
