import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  constructor(public ngwow:NgwWowService) { }

  ngOnInit() {
    this.ngwow.init();
  }

}
