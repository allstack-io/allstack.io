import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import * as auth0 from "auth0-js";
import { Auth0Lock } from "auth0-lock";
const options = {
  auth: {
    allowAutocomplete: true,
    allowShowPassword: true,
    autoclose: true,
    autofocus: true,
    allowedConnections: ['Username-Password-Authentication'],
    redirectUrl: "http://localhost:3000/callback",
    audience: "https://allstack.auth0.com/userinfo",
    responseType: "token id_token",
    params: {
      scope: "openid email" // Learn about scopes: https://auth0.com/docs/scopes
    },
    avatar: null,
    closable: true,
    /*languageDictionary: {
      emailInputPlaceholder: "something@youremail.com",
      title: "Log me in"
    },*/
    theme: {
      logo: 'https://www.marketingtechblog.com/wp-content/uploads/2010/06/example-logo.png'
    }
  }
}
const lock = new Auth0Lock(
    "GGN9dZclnooB5uPhrIuE0sul0SOAq8mv",
    "allstack.auth0.com",
    options
  );

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: "GGN9dZclnooB5uPhrIuE0sul0SOAq8mv",
    domain: "allstack.auth0.com",
    responseType: "token id_token",
    audience: "https://allstack.auth0.com/userinfo",
    redirectUri: "http://localhost:3000/callback",
    scope: "openid"
  });

  constructor(public router: Router) {   
    lock.on("authenticated", function(authResult) {
      // Use the token in authResult to getUserInfo() and save it to localStorage
      this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }  
        document.getElementById("nick").textContent = profile.nickname;
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
      });
    }); 
  }

  public login(): void {
    // this.auth0.authorize();
    lock.show();
  }
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = "";
        this.setSession(authResult);
        this.router.navigate(["/home"]);
      } else if (err) {
        this.router.navigate(["/home"]);
        console.log(err);
      }
    });
  }
  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }
  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // Go back to the home route
    this.router.navigate(["/"]);
  }
  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}");
    return new Date().getTime() < expiresAt;
  }
}
