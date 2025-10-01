import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
  styleUrls: ['./contact.component.css', './contactMediaQueries.css'],
})

export class ContactComponent implements OnInit {
  isLoading = true;
  formStatus: 'success' | 'error' | null = null;

  constructor(private http: HttpClient) {}

  contactData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  onSubmit() {
  this.isLoading = true;
  this.formStatus = null;
  this.http.post(`${environment.apiUrl}/contact`, this.contactData).subscribe({
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
    }
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
