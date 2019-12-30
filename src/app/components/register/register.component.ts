import { Component, OnInit } from '@angular/core';
import { CtrlService } from 'src/app/services/ctrl.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  authError:any;
  constructor(public ctrl:CtrlService,public toastr:ToastrService) {}

  user:firebase.User;
  ngOnInit() {
    this.ctrl.getUserState().subscribe(user=>{
      this.user = user;
    })
    this.resetform();
    this.ctrl.eventAuthError$.subscribe( data=>{
      this.authError=data;
    })
  }
  resetform(form?:NgForm) {
    if(form!=null) form.resetForm();
    this.ctrl.formData = {
      id:null,
      email:'',
      password:'',
      password2:'',
      name:''
    }
  }
  submit(form:NgForm) {
    let data = form.value;
    // console.log(data);
    // this.ctrl.fireStore.collection('loggers').add(data).then(res=>this.toastr.success("data saved to db"),(err=>console.log(err)));
    this.ctrl.createUser(data);
    this.resetform(form);
  }
  

}
