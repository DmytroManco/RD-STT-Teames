import { Component, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../../core';
import { appConfig } from '../../app.config';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    private warningMsg: string = appConfig.loginWarningMsg;

    constructor(private authenticationService: AuthenticationService) {}

    submitLoginForm(value) {
        this.authenticationService.login(value);
    }

    logout () {
        this.authenticationService.logout();
    }

    epamLogin() {
        console.log('epam Login');
    }
}
