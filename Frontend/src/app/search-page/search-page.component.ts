import { Component, OnInit } from '@angular/core';

import { Film } from '../model/Film.model';
import { DataService  } from '../services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

    filmList: Film[] = [];
    isFetching: boolean = false;

    searchBy: string;
    searchKeyword: string;


    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.searchBy = 'Title';
        this.searchKeyword = '';
    }

    onSearchButton(message: string) {
        console.log(message);
        this.filmList = [];
        // this.page = 1;
        this.isFetching = true;
        this.getFilmData();
    }

    getFilmData() {
        this.isFetching = true
        this.dataService.search(this.searchBy, this.searchKeyword).subscribe((jsonResult) => {
            console.log(jsonResult.message);
            console.log(jsonResult);
            if(jsonResult.result.length === 0) {

            }
            this.isFetching = false;
            this.filmList = jsonResult.result;
        });
    }


    onSearchBy(event: Event) {
      this.searchBy = (<HTMLElement>event.target).id;
    }

    onSearch(input: HTMLInputElement) {
      this.searchKeyword = input.value;
      this.getFilmData();
    }


}