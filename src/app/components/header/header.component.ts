import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Front-End';
  isShow = false;
  menu ="menu";

  constructor() { }

  ngOnInit(): void {
    
  }
  
  toggleDisplay() {
    this.isShow = !this.isShow;
    (this.isShow) ? this.menu="close" : this.menu="menu";
  }

}
