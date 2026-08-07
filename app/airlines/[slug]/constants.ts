// app/airlines/[slug]/constants.ts

import { airlinesDataMap } from './data';
import type { AirlineData } from './airlines-data';

// Export the type for use in other files
export type { AirlineData };

// Export the data map
export { airlinesDataMap };

// Helper function to get airline by slug
export const getAirlineBySlug = (slug: string): AirlineData | undefined => {
  return airlinesDataMap[slug];
};

// Get all airline slugs
export const getAirlineSlugs = (): string[] => {
  return Object.keys(airlinesDataMap);
};

// Get all airlines
export const getAllAirlines = (): AirlineData[] => {
  return Object.values(airlinesDataMap);
};

// For backward compatibility, export individual airlines
export const britishAirways = airlinesDataMap['british-airways'];
export const lufthansa = airlinesDataMap['lufthansa'];
export const airFrance = airlinesDataMap['air-france'];
export const klm = airlinesDataMap['klm-royal-dutch-airlines'];
export const turkishAirlines = airlinesDataMap['turkish-airlines'];
export const swiss = airlinesDataMap['swiss-international-airlines'];
export const virginAtlantic = airlinesDataMap['virgin-atlantic'];

// Default export
export default airlinesDataMap;