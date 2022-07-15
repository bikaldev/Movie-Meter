import { Component, OnInit } from '@angular/core';

import { Film } from '../model/Film.model';
import { DataService } from '../services/data.service';

@Component({
    selector:'app-filter-page',
    styleUrls: ['./filter-page.component.css'],
    templateUrl: './filter-page.component.html'
})
export class FilterPageComponent implements OnInit{

    filmList: Film[] = [];
    isFetching: boolean = false;
    
    page: number = 1;
    isScrolling: boolean = true;
    notEmpty: boolean = true;
    loadSpinner:boolean = false;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        // this.dataService.setUrl('avgRating','desc',['all'],'or',1920,2022,0,100);
        // this.getFilmData();
    }

    onFilterButton(message: string) {
        console.log(message);
        this.filmList = [];
        this.page = 1;
        this.isFetching = true;
        this.getFilmData();
    }

    getFilmData() {
        // this.isFetching = true
        this.dataService.fetchData(this.page).subscribe((jsonResult) => {
            console.log(jsonResult.message);
            console.log(jsonResult.result);
            if(jsonResult.result.length === 0) {
                this.notEmpty = false;
            }
            // console.log(jsonResult.result);
            this.isFetching = false;
            this.isScrolling = true;
            this.page += 1;
            this.loadSpinner = false;
            this.filmList.push(...jsonResult.result);
        });
    }

    onScroll() {
        console.log('scrolled')
        if(this.isScrolling && this.notEmpty) {
            this.loadSpinner = true;
            this.isScrolling = false;
            this.getFilmData();
        }
    }

}