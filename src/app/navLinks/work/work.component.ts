import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css', './workMediaQueries.css'],
})
export class WorkComponent implements OnInit {

  isLoading = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
