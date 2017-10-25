import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeGuard implements CanActivate {
  private isLogin: boolean;

  constructor(private auth: AuthenticationService,
              private router: Router) {
    this.isLogin = auth.status;
  }

  canActivate(): Observable<boolean> | boolean {
    if (this.isLogin) {
      console.log(this.auth);
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
