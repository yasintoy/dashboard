import * as actionTypes from '../../actionTypes/campaigns';
import * as actionCreators from '../../actionCreators/campaigns';

describe('campaigns actions', () => {
  it('should set campaigns', () => {
    const campaigns = [{ id: '123', campaignName: 'test' }];
    const expectedAction = {
      type: actionTypes.SET_CAMPAIGNS,
      campaigns,
    };
    expect(actionCreators.setCampaigns(campaigns)).toEqual(expectedAction);
  });

  it('should get campaigns', () => {
    const expectedAction = {
      type: actionTypes.GET_CAMPAIGNS,
    };
    expect(actionCreators.getCampaigns()).toEqual(expectedAction);
  });

  it('should set campaigns after success action', () => {
    const campaigns = [{ id: '123', campaignName: 'test' }];
    const expectedAction = {
      type: actionTypes.GET_CAMPAIGNS_SUCCESS,
      campaigns,
    };
    expect(actionCreators.getCampaignsSuccess(campaigns)).toEqual(
      expectedAction
    );
  });

  it('should send campaigns request action', () => {
    const expectedAction = {
      type: actionTypes.GET_CAMPAIGNS_REQUEST,
    };
    expect(actionCreators.getCampaignsRequest()).toEqual(expectedAction);
  });

  it('should send campaigns request action', () => {
    const error = 'ERROR TEST';
    const expectedAction = {
      type: actionTypes.GET_CAMPAIGNS_FAILURE,
      error,
    };
    expect(actionCreators.getCampaignsFailure(error)).toEqual(expectedAction);
  });
});
