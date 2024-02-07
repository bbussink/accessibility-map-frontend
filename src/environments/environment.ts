// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.interface';

const NWB_ROAD_SECTIONS_VECTOR_URL = 'https://maps.ndw.nu/api/v1/nwb/latest/mbtiles/roadSections/';

export const environment: Environment = {
  production: false,
  environmentType: 'local',
  apiBaseUrl: '/api',
  baseUrl: 'http://localhost:4200',
  mapStyles: {
    nwbRoadSection: 'https://maps.ndw.nu/styles/layers/nwb/roadSections/default.json',
  },
  vectorTiles: {
    NWB: NWB_ROAD_SECTIONS_VECTOR_URL,
  },
  accessibilityUrl: 'https://nls.staging.ndw.nu/api/rest/static-road-data/accessibility-map/v1',
  rdw: {
    registeredVehicleUrl: 'https://opendata.rdw.nl/resource/m9d7-ebf2.json',
    axleUrl: 'https://opendata.rdw.nl/resource/3huj-srit.json',
  },
  ...window.environment,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
