import { Component, OnInit } from '@angular/core';

import { Film } from '../model/Film.model';

@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css']
})
export class DisplayContainerComponent implements OnInit {

  filmList: Array<Film> = [ {
    title: 'The Godfather',
    year: 1972,
    posterUrl: 'https://image.tmdb.org/t/p/w342/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg',
    synopsis: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime 
                family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his 
                life, his youngest son, Michael steps in to take care of the would-be killers, 
                launching a campaign of bloody revenge.`,
    cast: [   'Marlon Brando' , 'Al Pacino' , 'James Caan' , 'Robert Duvall'],
    director: 'Francis Ford Coppola',
    avgRating: 94,
    genre: 'Drama, Crime',
    language: 'English',
    subscription: 'Amazon Video',
    imdb: 90,
    letterboxhd: 93,
    critic: 95,
    metacritic: 92
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
