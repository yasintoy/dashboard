import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

// import { fetchLyrics } from '../services/lyricsServices';
import * as actionCreators from '../actionCreators/campaigns';
import * as actionTypes from '../actionTypes/campaigns';
import { Campaign } from '../actionTypes/campaigns';

function* onLoadCampaigns() {
  try {
    yield put(actionCreators.getCampaignsRequest());
    // const { data } = yield call(fetchLyrics);
    const data : Campaign[] = [
      {
        'id': 'CN201701182',
        'campaignName': 'Camp'
      },
      {
        'id': 'CN201701188',
        'campaignName': 'Snew'
      },
      {
        'id': 'CN2017012321',
        'campaignName': 'kjasd'
      },
      {
        'id': 'CN2017012431',
        'campaignName': 'some name'
      },
      {
        'id': 'CN2017020638',
        'campaignName': 'abc1'
      },
      {
        'id': 'CN2017020640',
        'campaignName': 'abc2'
      },
      {
        'id': 'CN2017020641',
        'campaignName': 'abc3'
      },
      {
        'id': 'CN2017020642',
        'campaignName': 'abc4'
      },
      {
        'id': 'CN2017020643',
        'campaignName': 'abc5'
      },
      {
        'id': 'CN2017020644',
        'campaignName': 'abc6'
      }
    ];
    yield put(actionCreators.getCampaignsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getCampaignsFailure('error'));
  }
}

function* watchOnLoadCampaigns() {
  yield takeEvery(actionTypes.GET_CAMPAIGNS, onLoadCampaigns);
}

export default function* campaignsSaga() {
  yield all([fork(watchOnLoadCampaigns)]);
}
