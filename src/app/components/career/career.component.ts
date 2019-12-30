import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(public wowservice:NgwWowService) { }

  ngOnInit() {
    this.wowservice.init();
  }

}
