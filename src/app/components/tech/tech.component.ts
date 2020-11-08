import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onKeydown(event, str) {
    if (event.key === "Enter") {
      window.open(str, "_blank");
    }
  }
  window(str) {
    window.open(str, "_blank");
  }
  
}
