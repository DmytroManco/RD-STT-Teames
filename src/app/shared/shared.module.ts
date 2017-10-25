import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { InputModule } from './input/input.module';
import { LoginLayoutModule } from './login-layout';
import { ValidatorMessageModule } from './validator-message';
import { ButtonModule } from './button';
import { ModalModule } from './modal';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      InputModule,
      LoginLayoutModule,
      ValidatorMessageModule,
      ButtonModule,
      ModalModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      InputModule,
      LoginLayoutModule,
      ValidatorMessageModule,
      ButtonModule,
      ModalModule
  ]
})
export class SharedModule {
}
