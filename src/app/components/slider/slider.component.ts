import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images: string[][] = [
    ['/assets/1.png', 'opis pierwszego slajdu'], 
    ['/assets/1.png', 'opis drugiego slajdu'], 
    ['/assets/1.png', 'opis trzeciego slajdu']
  ];
  showNavigationArrows = false;
  showNavigationIndicators = true;
  pauseOnHover = true;
 @Input() comp = "start";

  @ViewChild('myCarousel', {static : true}) carousel: NgbCarousel;
  
  constructor() { }

  ngOnInit(): void {

  }
}
