import { NgModule } from '@angular/core';

import { LoginModule } from './login';
import { HomeModule } from './home';
import { TestPageModule } from './test-page';

@NgModule({
    imports: [
        LoginModule,
        HomeModule,
        TestPageModule
    ],
    exports: [
        LoginModule,
        HomeModule,
        TestPageModule
    ]
})
export class FeaturesModule {
}
