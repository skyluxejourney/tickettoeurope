// Import types from airlines-data.ts
import type { AirlineData, AirlinesDataMap } from '../airlines-data';

// Import all airline data
import { britishAirwaysData } from './british-airways';
import { lufthansaData } from './lufthansa-airlines';
import { airFranceData } from './airfrance-airlines';
import { klmData } from './klm-royal-dutch-airlines';
import { turkishAirlinesData } from './turkish-airlines';
import { swissData } from './swiss-airlines';
import { virginAtlanticData } from './virgin-atlantic';

// Create a properly typed mapping
export const airlinesDataMap: AirlinesDataMap = {
  'british-airways': britishAirwaysData,
  'lufthansa': lufthansaData,
  'air-france': airFranceData,
  'klm-royal-dutch-airlines': klmData,
  'turkish-airlines': turkishAirlinesData,
  'swiss-international-airlines': swissData,
  'virgin-atlantic': virginAtlanticData,
};

// Export individual data
export {
  britishAirwaysData,
  lufthansaData,
  airFranceData,
  klmData,
  turkishAirlinesData,
  swissData,
  virginAtlanticData,
};

export default airlinesDataMap;