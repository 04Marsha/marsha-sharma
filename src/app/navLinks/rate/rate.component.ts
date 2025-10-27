import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

interface FeedbackFormData {
  email: string;
  rating: number;
  note: string;
}

@Component({
  selector: 'app-rate',
  standalone: false,
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css',
})
export class RateComponent implements OnInit {
  isLoading = true;
  formStatus: 'success' | 'error' | null = null;

  rating = 0;
  stars = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient) {}

  feedbackData: FeedbackFormData = {
    email: '',
    rating: 0,
    note: '',
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  setRating(value: number) {
    this.rating = value;
  }

  submitFeedback(form: NgForm) {
    if (!this.feedbackData.email || this.rating === 0) {
      this.formStatus = 'error';
      return;
    }

    this.isLoading = true;
    this.formStatus = null;
    this.feedbackData.rating = this.rating;

    this.http
      .post(`${environment.apiUrl}/feedback`, this.feedbackData)
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
    this.feedbackData = { email: '', rating: 0, note: '' };
    this.rating = 0;
  }
}
