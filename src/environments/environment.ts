// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const ise_environment = {
  portal: "27041710-2e58-11e9-98fb-0050568775a3"
}


export const environment = {
  production: false,
  backend_url: "",
  portal: "27041710-2e58-11e9-98fb-0050568775a3",
  ise_login_url: `https://10.0.20.2:8443/portal/PortalSetup.action?portal=${ise_environment.portal}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
