import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.page.html',
  styleUrls: ['./signin2.page.scss'],
})
export class Signin2Page implements OnInit {

  constructor(private route: Router) { }

  nextpage() {
  	this.route.navigate(['/signin3']);
  }

  ngOnInit() {
  }

}
