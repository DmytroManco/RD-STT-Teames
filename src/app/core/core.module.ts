import { NgModule } from '@angular/core';
import { HomeGuard } from './guards/index';

@NgModule({
  imports: [],
  exports: [],
  providers: [HomeGuard]
})
export class CoreModule {
}
