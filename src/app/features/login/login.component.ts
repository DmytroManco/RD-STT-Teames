import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../core';
import { appConfig } from '../../app.config';
import { Subscription } from 'rxjs';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {
    private warningMsg: string = appConfig.loginWarningMsg;
    subscription: Subscription;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    submitLoginForm(value) {
        this.subscription = this.authenticationService.login(value).subscribe((res) => this.router.navigate(['/home']));
    }

    logout() {
        // this.subscription.add(this.authenticationService.logout().subscribe());
    }

    epamLogin() {
        console.log('epam Login');
    }
}
