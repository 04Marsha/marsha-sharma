import { Component } from '@angular/core';
import { AnimatedPageBase } from '../../shared/page.animate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrls: [
    './work.component.css',
    './workMediaQueries.css',
    '../../shared/page.animate.css',
  ],
})
export class WorkComponent extends AnimatedPageBase {
  constructor(router: Router) {
    super(router);
  }
}
