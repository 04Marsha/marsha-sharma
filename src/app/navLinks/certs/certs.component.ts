import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageBase } from '../../shared/page.animate';

@Component({
  selector: 'app-certs',
  standalone: false,
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css', '../../shared/page.animate.css'],
})
export class CertsComponent extends AnimatedPageBase {
  constructor(router: Router) {
    super(router);
  }
  certificates = [
    {
      title: 'Oracle Certified Foundations Associate',
      description: 'Completed form Oracle',
      imageUrl: 'assets/certificates/courses/oracle_ai_associate.jpg',
    },
    {
      title: 'MEAN Stack Development',
      description: 'Completed from Udemy',
      imageUrl: 'assets/certificates/courses/MEAN.jpg',
    },
    {
      title: 'Angular',
      description: 'Completed from Udemy',
      imageUrl: 'assets/certificates/courses/angular.jpg',
    },
    {
      title: 'Getting started with Artificial Intelligence',
      description: 'Completed from IBM',
      imageUrl: 'assets/certificates/courses/getting_started_with_AI.jpg',
    },
    {
      title: 'Journey to Cloud',
      description: 'Completed from IBM',
      imageUrl: 'assets/certificates/courses/journey_to_cloud.jpg',
    },
    {
      title: 'Python for Game Programming',
      description: 'Certificate from Udemy',
      imageUrl: 'assets/certificates/courses/pygame.jpg',
    },
  ];

  internshipCertificates = [
    {
      title: 'Emerging Technologies (AI & Cloud)',
      description: 'Edunet Foundation in Collaboration with AICTE',
      imageUrl: 'assets/certificates/internship/AIandCloud.png',
    },
  ];

  modalOpen = false;
  modalImage = '';
  modalTitle = '';

  openModal(imageUrl: string, title: string): void {
    this.modalImage = imageUrl;
    this.modalTitle = title;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }
}
