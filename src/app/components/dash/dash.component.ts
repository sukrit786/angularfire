import { Component, OnInit } from '@angular/core';
import { CtrlService } from 'src/app/services/ctrl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  user:firebase.User
  constructor(public ctrl:CtrlService,public router:Router) { }

  ngOnInit() {
    this.ctrl.getUserState().subscribe(user=>{
      this.user = user;
    })
  }
  logout() {
    this.ctrl.logout();
  }
  login() {
    this.router.navigate(['/login'])
  }
  register() {
    this.router.navigate(['/register'])
  }
}
