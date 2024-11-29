import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@softarc/native-federation-runtime';
import { initWrapperConfig } from './wrapper-config';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);
  route = inject(ActivatedRoute);

  @Input() config = initWrapperConfig;

  async ngOnInit() {
    const routeConfig = this.route.snapshot.data['config'];
    if (routeConfig) {
      this.config = routeConfig;
    }
    const { exposedModule, remoteName, elementName } = this.config;
    console.log(this.config);
    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);
    this.elm.nativeElement.appendChild(root);
  }
}
