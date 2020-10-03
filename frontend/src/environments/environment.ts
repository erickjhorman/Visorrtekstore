// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: '(DEV)',
  stripekey: 'pk_test_l7iYANEOx13w718rnvfY7wed00HkXGcBvC',
  //API_URL: 'http://localhost:8000/api',
  PUSHER_API_KEY: '3c5c6967326a2c53e2be',
  PUSHER_CLUSTER: 'us2',
  API_URL: 'https://visor-tek.herokuapp.com/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
