import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  isLoading = true;

  subtitleChunks = [
    {
      text: 'Computer Science student at Meghnad Saha Institute of Technology, Kolkata — focused on building ',
      className: 'highlight-white',
    },
    { text: 'scalable ', className: 'highlight-green' },
    {
      text: 'full-stack applications, intuitive UI/UX, and ',
      className: 'highlight-white',
    },
    { text: 'experimenting ', className: 'highlight-green' },
    { text: 'with emerging web technologies.', className: 'highlight-white' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.detectChanges();

      setTimeout(() => {
        const landing = document.querySelector('.landing-container');
        if (landing) {
          landing.classList.add('show');
        }
        gsap.to('.intro-text', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => {
            this.animateSubtitle();
          },
        });
      }, 50);
    }, 1000); //scrolling time
  }

  animateSubtitle() {
    const subline = document.getElementById('sub-line');
    if (!subline) return;

    subline.innerHTML = '';
    gsap.to(subline, { opacity: 1, duration: 0.5 });

    let counter = 0;

    this.subtitleChunks.forEach((chunk) => {
      const spanWrapper = document.createElement('span');
      spanWrapper.style.display = 'inline';
      spanWrapper.style.whiteSpace = 'pre-wrap';
      subline.appendChild(spanWrapper);

      const isHighlightedGreen =
        chunk.className && chunk.className.includes('highlight-green');
      const isHighlightedWhite =
        chunk.className && chunk.className.includes('highlight-white');

      chunk.text.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.classList.add('sub-char');
        charSpan.style.opacity = '0';

        if (isHighlightedGreen) {
          charSpan.style.color = '#54d688';
        } else if (isHighlightedWhite) {
          charSpan.style.color = 'white';
        }

        spanWrapper.appendChild(charSpan);

        gsap.to(charSpan, {
          opacity: 1,
          delay: counter * 0.04,
          duration: 0.4,
          ease: 'power2.out',
        });

        counter++;
      });
    });
  }
}
