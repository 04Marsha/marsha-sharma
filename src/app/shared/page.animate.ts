import { Router } from '@angular/router';

export abstract class AnimatedPageBase {
  constructor(protected router: Router) {}

  goBack(path: string = '/'): void {
    const wrapper = document.querySelector(
      '.page-slide-wrapper'
    ) as HTMLElement | null;

    if (!wrapper) {
      this.router.navigate([path]);
      return;
    }

    wrapper.classList.add('fade-out');

    setTimeout(() => {
      this.router.navigate([path]);
    }, 150);
  }
}
