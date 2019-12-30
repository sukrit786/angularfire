import { Injectable } from '@angular/core';
import { Users } from '../model/users';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CtrlService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser:any;
  formData:Users
  constructor(public fireStore:AngularFirestore,public afauth:AngularFireAuth,public router:Router,public toastr:ToastrService) {}
  createUser(data) {
    this.afauth.auth.createUserWithEmailAndPassword( data.email, data.password ).then(userCred=>{
      console.log("here")
      this.newUser = data;
      console.log(userCred);
      userCred.user.updateProfile({
        displayName:data.name
      });

      this.insertUserData(userCred).then(res=> {
        this.toastr.success('You are registered');
        this.router.navigate(['/login']);
      })
    }).catch(err =>{
      this.eventAuthError.next(err);
    })
  }
  insertUserData(userCred:firebase.auth.UserCredential) {
    return this.fireStore.doc(`Users/${userCred.user.uid}`).set({
      email:this.newUser.email,
      name:this.newUser.name,
    })
  }
  logout() {
    return this.afauth.auth.signOut();
  }
  getUserState() {
    return this.afauth.authState;
  }
  get isAuthenticate() {
    return this.afauth.authState!==null;
  }
  login(email,password) {
    console.log(email+' '+password);
    this.afauth.auth.signInWithEmailAndPassword(email,password)
    .then(userCred=> {
      if(userCred) this.router.navigate(['/dash'])
    })
    .catch(err => 
      this.eventAuthError.next(err)
      // this.toastr.warning('Sign-in Failed',"Incorrect Username Password")

    )}
}
