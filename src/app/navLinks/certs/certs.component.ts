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
}
