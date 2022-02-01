// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.

export const environment = {
  firebase: {
    projectId: 'ejercicio-emt-be0b5',
    appId: '1:953976298785:web:41f434204cec327bcbf260',
    databaseURL: 'https://ejercicio-emt-be0b5-default-rtdb.firebaseio.com',
    storageBucket: 'ejercicio-emt-be0b5.appspot.com',
    apiKey: 'AIzaSyBjURnM1AIWt5UO374eJRoLEpXeT-orFyI',
    authDomain: 'ejercicio-emt-be0b5.firebaseapp.com',
    messagingSenderId: '953976298785',
  },
  production: false,
  version: '1.0.0',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
