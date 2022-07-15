import { Component, Input, OnInit } from '@angular/core';

import { Film } from '../model/Film.model';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() film: Film;
  
  constructor() {}

  ngOnInit(): void {
  }

}
