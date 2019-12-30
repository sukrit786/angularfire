import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CtrlService } from './ctrl.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public ctrl:CtrlService, public router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if(this.ctrl.isAuthenticate) { 
      console.log(this.ctrl.isAuthenticate);
      return true;
    }
    console.log("access denied");
    this.router.navigate(['/login']);
    return false;
  }
  
}
