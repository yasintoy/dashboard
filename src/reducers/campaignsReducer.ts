import {
  Campaign,
  CampaignsAction,
  SET_CAMPAIGNS,
  GET_CAMPAIGNS_SUCCESS
} from '../actionTypes/campaigns';


export interface CampaignsState {
  campaigns: Campaign[];
}

const initialState: CampaignsState = {
  campaigns: [],
};

export default function campaignsReducer(
  state: CampaignsState = initialState,
  action: CampaignsAction
): CampaignsState {
  switch (action.type) {
    case SET_CAMPAIGNS:
    case GET_CAMPAIGNS_SUCCESS:
      return {
        campaigns: action.campaigns,
      };
    default:
      return state;
  }
}
