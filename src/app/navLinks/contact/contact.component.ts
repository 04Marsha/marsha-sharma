import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AnimatedPageBase } from '../../shared/page.animate';
import { Router } from '@angular/router';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
    './contactMediaQueries.css',
    '../../shared/page.animate.css',
  ],
})
export class ContactComponent extends AnimatedPageBase {
  isLoading = false;
  formStatus: 'success' | 'error' | null = null;

  constructor(private http: HttpClient, router: Router) {
    super(router);
  }

  contactData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    if(this.isLoading) return;

    this.isLoading = true;
    this.formStatus = null;

    this.http
      .post(`${environment.apiUrl}/contact`, this.contactData)
      .subscribe({
        next: () => {
          this.formStatus = 'success';
          this.isLoading = false;
          this.resetForm();

          setTimeout(() => {
            this.formStatus = null;
          }, 3000);
        },
        error: () => {
          this.formStatus = 'error';
          this.isLoading = false;

          setTimeout(() => {
            this.formStatus = null;
          }, 3000);
        },
      });
  }

  private resetForm() {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
