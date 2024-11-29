import { Component, inject, NgZone } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'shell';
  constructor() {
    globalThis.ngZone = inject(NgZone);
  }
}
