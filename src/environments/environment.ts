// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  openWeatherMapAPISearch_URL: 'https://api.openweathermap.org/data/2.5/weather?q=',
  openWeatherMapAPIForecast_URL: 'https://api.openweathermap.org/data/2.5/forecast?q=',
  openWeatherMapAPI_AppID: 'e7ca04393151d01144864695526dd6a0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
