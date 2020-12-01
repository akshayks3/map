import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.scss']
})
export class IndiaMapComponent implements OnInit {
  title = "map1";
  tooltip: string;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {

  }

  onClick(value) {
    console.log(value);
    var state = value.split(" ").join("");
    this.router.navigate(["state", state]);
  }

  over_state(value) {
    this.tooltip = value;
    console.log("hello");
    console.log(value);
  }

  out_state(value) {
    this.tooltip = "";
    console.log(value);
  }

}
