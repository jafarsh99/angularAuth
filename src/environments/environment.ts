// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAtYRFS1BeXsu7wk5A13w61QYqXPJ3DzRc",
    authDomain: "angularauth-50d43.firebaseapp.com",
    projectId: "angularauth-50d43",
    storageBucket: "angularauth-50d43.appspot.com",
    messagingSenderId: "300453839775",
    appId: "1:300453839775:web:c7cf0804614b0d8663b3aa",
    databaseURL: "https://angularauth-50d43-default-rtdb.firebaseio.com",  
  }
};

// const app = initializeApp(environment.firebase);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
