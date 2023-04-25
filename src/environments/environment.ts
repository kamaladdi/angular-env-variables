// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { NgEnvironment } from "./environment.model";

const ngEnvironment: NgEnvironment = {
  NG_APP_ENV: process.env['NG_APP_ENV'] || 'local',
  NG_APP_GOOGLE_MAPS_KEY: process.env['NG_APP_GOOGLE_MAPS_KEY'] || 'test-key'
}

export const environment = {
  production: true,
  env: ngEnvironment
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
