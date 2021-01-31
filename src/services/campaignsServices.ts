import axios from 'axios';

import { Campaign } from '../actionTypes/campaigns';

import Config from '../config/index';

const { BASE_URL } = Config;

export interface CampaignsResponse {
  campaigns: Campaign[];
}

export async function fetchCampaigns(): Promise<CampaignsResponse> {
  return axios.get(`${BASE_URL}/campaigns`);
}
