import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin3',
  templateUrl: './signin3.page.html',
  styleUrls: ['./signin3.page.scss'],
})
export class Signin3Page implements OnInit {

  constructor(private route: Router) { }

  cities: any[] = [
    {
      name: 'Abobo',
    },
    {
      name: 'Adjamé',
    },
    {
      name: 'Attécoubé',
    },
    {
      name: 'Bingerville',
    },
    {
      name: 'Cocody',
    },
    {
      name: 'Koumassi',
    },
    {
      name: 'Marcory',
    },
    {
      name: 'Plateau',
    },
    {
      name: 'Port Bouët',
    },
    {
      name: 'treichville',
    },
    {
      name: 'Yopougon',
    },
  ];

  nextpage() {
  	this.route.navigate(['/login']);
  }


  ngOnInit() {
  }

}
