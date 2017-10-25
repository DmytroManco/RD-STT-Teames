import { Injectable } from "@angular/core";

import { HttpService } from './http.service';
import { LoginForm } from '../shared/models';
import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    pathLogin: string = 'login';
    pathLogout: string = 'logout';
    role: string;
    token: string;
    error: string;
    status: boolean = false;

    constructor(private httpService: HttpService) {
    }

    login(value: LoginForm) {
        this.httpService.postUser(this.toJson(value), this.pathLogin)
            .subscribe(
                (res) => {
                    sessionStorage.setItem(appConfig.nameToken, res.headers.get(appConfig.nameToken));
                    // this.httpService.TOKEN = res.headers.get(appConfig.nameToken);
                    this.token = res.headers.get(appConfig.nameToken);
                    this.role = res.json();
                    this.status = true;
                }
            );
    }

    logout() {
        this.httpService.getLogout(this.pathLogout).subscribe(
            (res) => {
                console.log(res);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    toJson(data: LoginForm): string {
        return JSON.stringify(data);
    }
}
