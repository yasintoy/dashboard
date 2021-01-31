import axios from 'axios';

import { Campaign } from '../actionTypes/campaigns';

interface CampaignsResponse {
  campaigns: Campaign[];
}

export async function fetchCampaigns(): Promise<CampaignsResponse> {
  // eslint-disable-next-line no-return-await
  return await axios.get('http://localhost:8080/campaigns');
}
