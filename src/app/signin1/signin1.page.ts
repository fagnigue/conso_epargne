import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin1',
  templateUrl: './signin1.page.html',
  styleUrls: ['./signin1.page.scss'],
})
export class Signin1Page implements OnInit {

  constructor(private route: Router) { }

  nextpage() {
  	this.route.navigate(['/signin2']);
  }

  ngOnInit() {
  }

}
