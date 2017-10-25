import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs";
import { appConfig } from '../app.config';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    postUser(value: string, path: string): any {
        const HEADER: Headers = appConfig.header.getHeader(appConfig.header.json);
        const URL: string = appConfig.url.urlServer + appConfig.url.path + path;

        return this.http.post(URL, value, {headers: HEADER})
            .map(this.callbackMap)
            .catch(this.callbackError);
    }

    getLogout(path: string): any {
        // const HEADER: Headers = appConfig.header.getHeader(appConfig.header.token);
        // const URL: string = appConfig.url + appConfig.url.path + path;
        //
        // return this.http.get(URL)
        //     .map(this.callbackMap)
        //     .catch(this.callbackError);
        console.log('LOGOUT');
    }

    private callbackMap(response: Response): Response {
        return response;
    }

    private callbackError(error: Response): Observable<string> {
        console.log(error.json().message);

        return Observable.throw(error.json().message);
    }
}

