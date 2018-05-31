import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import * as Rellax from "rellax";
import { AuthService } from "../auth/auth.service";



@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

// contact us --> start
  zoom: number = 14;
  lat: number = 38.918722;
  lng: number = -77.231092;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }]
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }]
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
    }
  ];
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
// contact us --> end
  model = {
    left: true,
    middle: false,
    right: false
  };
  date: Date = new Date();

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    // this.auth.login();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("home-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
    
  }
  ngAfterViewInit() {
    setTimeout(function() {
      if (window.innerWidth >= 991) {
        var rellax = new Rellax(".rellax", {
          center: true
        });
        var rellax1 = new Rellax(".rellax1", {
          center: true
        });
        var rellax5 = new Rellax(".rellax5", {
          center: true
        });
        var rellax6 = new Rellax(".rellax6", {
          center: true
        });
        var rellax7 = new Rellax(".rellax7", {
          center: true
        });
        var rellax8 = new Rellax(".rellax8", {
          center: true
        });
        var rellax9 = new Rellax(".rellax9", {
          center: true
        });
        var rellax10 = new Rellax(".rellax10", {
          center: true
        });
        var rellax11 = new Rellax(".rellax11", {
          center: true
        });
        var rellax12 = new Rellax(".rellax12", {
          center: true
        });
        var rellax13 = new Rellax(".rellax13", {
          center: true
        });
        var rellax14 = new Rellax(".rellax14", {
          center: true
        });

        var rellaxHeader = new Rellax(".rellax-header");
        var rellaxText = new Rellax(".rellax-text");
      }
    }, 200);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("home-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

}
