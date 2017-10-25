import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeGuard } from '../../core/index';

export const HomeRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [HomeGuard]}
];
