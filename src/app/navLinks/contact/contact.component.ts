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
    }, 0);
  }
  contactData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // To display form submission status
  formStatus: 'success' | 'error' | null = null;

  constructor() {}

  /**
   * Handles the form submission.
   * In a real application, you would send this data to a backend service.
   */
  onSubmit(): void {
    console.log('Form Submitted!', this.contactData);

    // Simulate an API call
    this.simulateApiCall().then(
      (response) => {
        this.formStatus = 'success';
        // Optionally, reset the form after successful submission
        this.resetForm();
      },
      (error) => {
        this.formStatus = 'error';
        console.error('Form submission failed:', error);
      }
    );
  }

  /**
   * Simulates an asynchronous API call for form submission.
   * Replace this with actual HTTP client logic to your backend.
   */
  private simulateApiCall(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.1; // 90% chance of success for demo
        if (success) {
          resolve({ message: 'Form submitted successfully!' });
        } else {
          reject({ message: 'Failed to submit form.' });
        }
      }, 1500); // Simulate network delay
    });
  }

  /**
   * Resets the form after submission.
   */
  private resetForm(): void {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    // If you're using @ViewChild to get the form directive, you'd call form.reset() here.
    // For this example, re-initializing ngModel data is sufficient.
  }
}
