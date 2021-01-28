
export interface Campaign {
  id: string;
  campaignName: string;
}


export const SET_CAMPAIGNS = 'campaignsActionTypes/SET_CAMPAIGNS';
export interface SetCampaignsAction {
  type: typeof SET_CAMPAIGNS;
  campaigns: Campaign[];
}

export const GET_CAMPAIGNS = 'campaignsActionTypes/GET_CAMPAIGNS';
export interface GetCampaignsAction {
  type: typeof GET_CAMPAIGNS;
}

export const GET_CAMPAIGNS_REQUEST = 'campaignsActionTypes/GET_CAMPAIGNS_REQUEST';
export interface GetCampaignsRequestAction {
  type: typeof GET_CAMPAIGNS_REQUEST;
}

export const GET_CAMPAIGNS_SUCCESS = 'campaignsActionTypes/GET_CAMPAIGNS_SUCCESS';
export interface GetCampaignsSuccessAction {
  type: typeof GET_CAMPAIGNS_SUCCESS;
  campaigns: Campaign[];
}

export const GET_CAMPAIGNS_FAILURE = 'campaignsActionTypes/GET_CAMPAIGNS_FAILURE';
export interface GetCampaignsFailureAction {
  type: typeof GET_CAMPAIGNS_FAILURE;
  error: Error | string;
}

export type CampaignsAction =
  | SetCampaignsAction
  | GetCampaignsAction
  | GetCampaignsRequestAction
  | GetCampaignsSuccessAction
  | GetCampaignsFailureAction;
