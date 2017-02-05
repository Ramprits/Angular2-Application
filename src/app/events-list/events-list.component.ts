import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
title = 'app works!';
  firstName='Ramprit sahani';

  events ={
    id:1,
    name: 'Angular Conect',
    date:'09/02/2017',
    time:'10:00 am',
    price: 58000,
    imageUrl:'',
    location:{
      address:'Borivali East Mumbai',
      city:'Mumbai Bvi',
      country:'India'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
