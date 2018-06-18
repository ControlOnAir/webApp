import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokenValidationPage } from './token-validation';

@NgModule({
  declarations: [
    TokenValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(TokenValidationPage),
  ],
})
export class TokenValidationPageModule {}
