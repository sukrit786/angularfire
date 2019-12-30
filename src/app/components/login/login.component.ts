import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { CtrlService } from 'src/app/services/ctrl.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  list:Users[];
  authError:any;
  constructor(public ctrl:CtrlService,public fireStore:AngularFirestore,public toastr:ToastrService) { }

  ngOnInit() {
    this.ctrl.eventAuthError$.subscribe(data=>{
      this.authError = data;
    })
  }
  onsubmit(form:NgForm) {
    let data = form.value;
    this.ctrl.login(data.email,data.password);
  }
}
