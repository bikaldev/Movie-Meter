import { Component, OnInit, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { DataService } from 'src/app/services/data.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  sortBy: {id:string; value: string};
  genreLogic: string;
  genreList: Array<string>;
  yearOption: Options;
  rateOption: Options;
  minYear: number;
  maxYear: number;
  minRate: number;
  maxRate: number;
  sortOrder: string;

  @Output() onFilter = new EventEmitter<string>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.sortBy = {id: 'avgRating', value: 'Average Rating'};
    this.genreLogic = 'OR';
    this.genreList = ['all'];
    this.yearOption = {
      floor: 1920,
      ceil: 2022
    }
    this.rateOption = {
      floor: 0,
      ceil: 100
    }
    this.minRate = 0;
    this.maxRate = 100;
    this.minYear = 1920;
    this.maxYear = 2022;
    this.sortOrder = 'desc';

    this.onClick();
  }

  onSortOrder(event: Event) {
    this.sortOrder = (<HTMLElement>event.target).id;
  }
  
  onSortBy(event: Event) {
    this.sortBy.id = (<HTMLElement>event.target).id;
    this.sortBy.value = (<HTMLElement>event.target).innerText;
  }

  onGenreLogic(event:Event) {
    this.genreLogic = (<HTMLElement>event.target).id;
  }

  onGenre(event: Event) {
    let selectedGenre = (<HTMLElement>event.target).id;

    if(this.genreList[0] === 'all') {
      this.genreList.pop();
      this.genreList.push(selectedGenre);
    } else {
      if(this.genreList.includes(selectedGenre)) {
        let index = this.genreList.findIndex((val) => val === selectedGenre);
        this.genreList.splice(index, 1);
        if(this.genreList.length === 0) {
          this.genreList.push('all');
        }
      } else {
        this.genreList.push(selectedGenre);
      }
    }
  // console.log(this.genreList);
  }

  onClick() {
    this.dataService.setUrl(this.sortBy.id, this.sortOrder,this.genreList, this.genreLogic, this.minYear, this.maxYear, this.minRate, this.maxRate);
    this.onFilter.emit('The filter button was pressed!');
  }

}
