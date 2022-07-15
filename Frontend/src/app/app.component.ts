import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MovieMeter';

  constructor() {}

  ngOnInit(): void {
    // this.dataService.fetchData('title', ['all'],'or',1920,1925,0,100);
  }
}
