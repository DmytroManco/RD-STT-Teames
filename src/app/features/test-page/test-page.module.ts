import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TestPageComponent } from './test-page.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TestPageComponent
  ],
  exports: [TestPageComponent],
})
export class TestPageModule {
}
