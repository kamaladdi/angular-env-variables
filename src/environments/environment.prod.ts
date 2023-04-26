import { Environment } from "./environment.model";

const env: Environment  = {
  NG_APP_ENV : window["env"]["NG_APP_ENV"],
  NG_GOOGLE_MAPS_KEY: window["env"]["NG_GOOGLE_MAPS_KEY"],
}

export const environment = {
  production: true,
  env: env
};
