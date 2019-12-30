import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.scss']
})
export class ErpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
public myFunctionn() {
  var x = document.getElementById("demo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

public myFunctionnn() {
  var x = document.getElementById("demoo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

public myFunctionnnn() {
  var x = document.getElementById("demooo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

public myFunctionnnnn() {
  var x = document.getElementById("demoooo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
}
