import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certs',
  standalone: false,
  templateUrl: './certs.component.html',
  styleUrl: './certs.component.scss',
})
export class CertsComponent implements OnInit {
  isLoading = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); //scrolling time
  }
  certificates = [
    {
      title: 'MEAN Stack Development',
      description: 'Completed from Udemy',
      imageUrl: 'assets/certificates/MEAN.jpg',
    },
    {
      title: 'Angular',
      description: 'Completed from Udemy',
      imageUrl: 'assets/certificates/angular.jpg',
    },
    {
      title: 'Getting started with Artificial Intelligence',
      description: 'Completed from IBM',
      imageUrl: 'assets/certificates/getting_started_with_AI.jpg',
    },
    {
      title: 'Journey to Cloud',
      description: 'Completed from IBM',
      imageUrl: 'assets/certificates/journey_to_cloud.jpg',
    },
    {
      title: 'Python for Game Programming',
      description: 'Certificate from Udemy',
      imageUrl: 'assets/certificates/pygame.jpg',
    },
  ];

  internshipCertificates = [
    {
    title: "Emerging Technologies (AI & Cloud)",
    description: "Edunet Foundation in Collaboration with AICTE",
    imageUrl: "assets/certificates/internship/AIandCloud.png",
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
