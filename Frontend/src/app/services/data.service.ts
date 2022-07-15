import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'; 

import { Film } from "../model/Film.model";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}

    filmList: Film[] = [];
    searchList: Film[] = [];
    sortOrder: string = 'desc';
    fetchStatus: boolean = false; //true if fetching
    url:string;
    queryParams: HttpParams;

    getFilmList() {
        return this.filmList.slice();
    }
 
    getFetchStatus() {
        return this.fetchStatus;
    }

    fetchData(page: number) {
            this.fetchStatus = true;
            return this.http.get<{message: String, result: Film[]}>(this.url, {
                params: this.queryParams.append('page', String(page))
            });
            
    }

    setUrl(sortBy: string,
        sortOrder: string, // either 'desc' or 'asc'
        genreList: string[], 
        genreLogic: string, 
        startYear?: number, 
        endYear?: number, 
        startRate?: number, 
        endRate?: number) {
            let queryGenreList = '';
            for(let i = 0; i<genreList.length; i++) {
                if(i == genreList.length-1) {
                  queryGenreList += genreList[i];
                  continue;  
                }
                queryGenreList += genreList[i] + ','
            }
            let queryParams = new HttpParams().append('sortBy',sortBy);
            queryParams = queryParams.append('sortOrder', sortOrder);
            queryParams = queryParams.append('genreList',queryGenreList);
            queryParams = queryParams.append('genreLogic', genreLogic.toLowerCase());
            if(startYear && endYear && String(startRate) && endRate) {
                queryParams = queryParams.append('startYear',String(startYear));
                queryParams = queryParams.append('endYear',String(endYear));
                queryParams = queryParams.append('startRating',String(startRate));
                queryParams = queryParams.append('endRating',String(endRate));
            }

            this.url = 'http://localhost:3000/getMovieDetail/';
            // this.url = 'https://git.heroku.com/moviemeter-api.git/getMovieDetail/';
            this.queryParams = queryParams;
    }

    search(searchBy: string, searchKey: string) {
        let url = 'http://localhost:3000/getMovieDetail/search/'+searchBy.toLowerCase()+'/'+searchKey;
        // let url = 'https://git.heroku.com/moviemeter-api.git/getMovieDetail/search/'+searchBy.toLowerCase()+'/'+searchKey;
        
        this.fetchStatus = true;
        return this.http.get<{message: string, result: Film[]}>(url);
    }

    setSortOrder(sortOrder: string) {
        this.sortOrder = sortOrder;
    }

    getSearchData() {
        return this.searchList.slice(0,-1);
    }

}