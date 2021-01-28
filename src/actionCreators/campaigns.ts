import * as actions from '../actionTypes/campaigns';
import { Campaign } from '../actionTypes/campaigns';

export function setCampaigns(
  campaigns: Campaign[]
): actions.SetCampaignsAction {
  return {
    type: actions.SET_CAMPAIGNS,
    campaigns
  };
}

export function getCampaigns(): actions.GetCampaignsAction {
  return {
    type: actions.GET_CAMPAIGNS,
  };
}

export function getCampaignsRequest(): actions.GetCampaignsRequestAction {
  return {
    type: actions.GET_CAMPAIGNS_REQUEST
  };
}

export function getCampaignsSuccess(
  campaigns: Campaign[]
): actions.GetCampaignsSuccessAction {
  return {
    type: actions.GET_CAMPAIGNS_SUCCESS,
    campaigns
  };
}

export function getCampaignsFailure(
  error: Error | string
): actions.GetCampaignsFailureAction {
  return {
    type: actions.GET_CAMPAIGNS_FAILURE,
    error
  };
}
