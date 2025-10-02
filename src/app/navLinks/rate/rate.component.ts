import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  standalone: false,
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css',
})
export class RateComponent implements OnInit {

  isLoading = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
