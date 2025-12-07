import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageBase } from '../../shared/page.animate';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../shared/page.animate.css'],
})
export class AboutComponent extends AnimatedPageBase {
  constructor(router: Router) {
    super(router);
  }
}
