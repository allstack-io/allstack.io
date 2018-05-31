import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AgmCoreModule } from "@agm/core";
import {
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings
} from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";
import { AuthService } from "../auth/auth.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    NgbModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBsPWdknHeIUBAW0k_oDN6pJOCesJ6AmC0"
    })
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [
    AuthService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: "6LedbFwUAAAAALEHax4H3uJQbPq8ufu4hiaRhrvS"
      } as RecaptchaSettings
    }
  ]
})
export class HomeModule {}
