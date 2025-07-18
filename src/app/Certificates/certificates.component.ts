import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent implements AfterViewInit {
  @ViewChild('track') trackRef!: ElementRef;
  @ViewChildren('slide') slideRefs!: QueryList<ElementRef>;
  @ViewChildren('dot') dotRefs!: QueryList<ElementRef>;
  @ViewChild('prevBtn') prevBtnRef!: ElementRef;
  @ViewChild('nextBtn') nextBtnRef!: ElementRef;

  certificates = [
    { img: 'certificates/angular.jpg' },
    { img: 'certificates/MEAN.jpg' },
    { img: 'certificates/getting_started_with_AI.jpg' },
    { img: 'certificates/pygame.jpg' },
  ];

  currentIndex = 0;

  ngAfterViewInit(): void {
    this.setSlidesPosition();
    this.showSlide(this.currentIndex);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setSlidesPosition();
    this.showSlide(this.currentIndex);
  }

  setSlidesPosition(): void {
    const slideWidth = this.slideRefs.first.nativeElement.offsetWidth;
    this.slideRefs.forEach((slide, index) => {
      slide.nativeElement.style.left = `${slideWidth * index}px`;
    });
  }

  showSlide(index: number): void {
    const slides = this.slideRefs.toArray().map((ref) => ref.nativeElement);
    const dots = this.dotRefs.toArray().map((ref) => ref.nativeElement);
    const track = this.trackRef.nativeElement;

    if (index < 0 || index >= slides.length) return;

    const targetSlide = slides[index];
    track.style.transform = `translateX(-${targetSlide.style.left})`;

    slides.forEach((slide) => slide.classList.remove('current-slide'));
    targetSlide.classList.add('current-slide');

    this.currentIndex = index;

    this.prevBtnRef.nativeElement.style.display =
      index === 0 ? 'none' : 'block';
    this.nextBtnRef.nativeElement.style.display =
      index === slides.length - 1 ? 'none' : 'block';
  }

  goNext(): void {
    this.showSlide(this.currentIndex + 1);
  }

  goPrev(): void {
    this.showSlide(this.currentIndex - 1);
  }

  goToSlide(index: number): void {
    this.showSlide(index);
  }
}
