import { Component, OnInit } from '@angular/core';

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
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  isLoading = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  contactData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  formStatus: 'success' | 'error' | null = null;

  constructor() {}

  onSubmit(): void {
    console.log('Form Submitted!', this.contactData);

    this.simulateApiCall().then(
      (response) => {
        this.formStatus = 'success';
        this.resetForm();
      },
      (error) => {
        this.formStatus = 'error';
        console.error('Form submission failed:', error);
      }
    );
  }

  private simulateApiCall(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.1;
        if (success) {
          resolve({ message: 'Form submitted successfully!' });
        } else {
          reject({ message: 'Failed to submit form.' });
        }
      }, 1500);
    });
  }

  private resetForm(): void {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
