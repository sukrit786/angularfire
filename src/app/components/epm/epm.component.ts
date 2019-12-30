import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-epm',
  templateUrl: './epm.component.html',
  styleUrls: ['./epm.component.scss']
})
export class EpmComponent implements OnInit {

  constructor(public ngwow:NgwWowService) { }

  ngOnInit() {
    this.ngwow.init();
  }

}
