import { Headers } from '@angular/http';

export let appConfig = {
    url: {
        urlServer: 'http://epuadniw0050t1.kyiv.epam.com/testingtool',
        path: '/rest/'
    },
    header: {
        getHeader: (value) => new Headers({'Content-Type': `${value}; charset=utf-8`}),
        json: 'application/json',
    },
    nameToken: 'x-token',
    loginWarningMsg: 'This system is owned by EPAM Systems. If you are not authorized to access this system, exit immediately. ' +
    'Unauthorized access to this system is forbidden by company policies, national, and international laws. ' +
    'Unauthorized users are subject to criminal and civil penalties as well as company initiated disciplinary ' +
    'proceedings. By entering this system you acknowledge that you have authorized access and appropriate of ' +
    'privilege within the system.'

};
