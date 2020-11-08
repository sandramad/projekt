import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [];
  visibleNews = 4;
  newsNext = 2;
  sumNews = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      data.sort((a,b) => b.date - a.date);
      this.news = data;
      this.sumNews=data.length;
    })  
  }
  nextNews(){
    this.visibleNews+=this.newsNext;
  }
}
