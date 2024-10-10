import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: { url: string; alt: string }[] = [
    { url: '/assets/images/exchange.png', alt: 'Game 1 Image' },
    { url: 'assets/images/binary.png', alt: 'Game 2 Image' },
    { url: 'assets/images/evolution.png', alt: 'Game 3 Image' },
    { url: 'assets/images/live-casino.png', alt: 'Game 4 Image' },
    { url: 'assets/images/powergames.png', alt: 'Game 5 Image' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
