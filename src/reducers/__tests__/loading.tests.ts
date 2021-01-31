import * as actionTypes from '../../actionTypes/campaigns';
import * as actionCreators from '../../actionCreators/campaigns';

import isLoadingReducer from '../isLoadingReducer';

describe('error reducer', () => {
  it('should catch error', () => {
    const expectedAction = {
      [actionTypes.GET_CAMPAIGNS]: true,
    };
    expect(isLoadingReducer({}, actionCreators.getCampaignsRequest())).toEqual(
      expectedAction
    );
  });
});
