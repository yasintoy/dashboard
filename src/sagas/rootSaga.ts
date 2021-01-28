import { all, fork } from 'redux-saga/effects';

import campaignsSaga from './campaignsSaga';

export default function* rootSaga() {
  yield all([fork(campaignsSaga)]);
}
