import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import * as actionCreators from '../actionCreators/campaigns';
import * as actionTypes from '../actionTypes/campaigns';
import { fetchCampaigns } from '../services/campaignsServices';

function* onLoadCampaigns() {
  try {
    yield put(actionCreators.getCampaignsRequest());
    const { data } = yield call(fetchCampaigns);
    yield put(actionCreators.getCampaignsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getCampaignsFailure(error));
  }
}

function* watchOnLoadCampaigns() {
  yield takeEvery(actionTypes.GET_CAMPAIGNS, onLoadCampaigns);
}

export default function* campaignsSaga() {
  yield all([fork(watchOnLoadCampaigns)]);
}
