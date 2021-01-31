import * as actionTypes from '../../actionTypes/campaigns';
import * as actionCreators from '../../actionCreators/campaigns';

import errorReducer from '../errorReducer';

describe('error reducer', () => {
  it('should catch error', () => {
    const expectedAction = {
      [actionTypes.GET_CAMPAIGNS]: 'error',
    };
    expect(
      errorReducer({}, actionCreators.getCampaignsFailure('error'))
    ).toEqual(expectedAction);
  });
});
