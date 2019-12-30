import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hello() {
    console.log("hey");
  }
  openNav() {
    console.log("event ")
    document.getElementById("myNav").style.height = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  // $("#myNav p").click(function(){
  //   closeNav();
  // }); 
}
