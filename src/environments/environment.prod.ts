import { NgEnvironment } from "./environment.model";

const ngEnvironment: NgEnvironment = {
  NG_APP_ENV: process.env['NG_APP_ENV'] ||'',
  NG_APP_GOOGLE_MAPS_KEY: process.env['NG_APP_GOOGLE_MAPS_KEY'] ||''
}

export const environment = {
  production: true,
  env: ngEnvironment
};
