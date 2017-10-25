import { Routes } from '@angular/router';
import { HomeRoutes, LoginRoutes, TestPageRoutes } from './features'

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    ...TestPageRoutes,
    ...LoginRoutes,
    ...HomeRoutes,
    {path: '**', redirectTo: '404'}
];
