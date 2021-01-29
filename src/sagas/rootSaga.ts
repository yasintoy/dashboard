import { all, fork } from 'redux-saga/effects';

import campaignsSaga from './campaignsSaga';
import cardsSaga from './cardsSaga';

export default function* rootSaga() {
  yield all([fork(campaignsSaga)]);
  yield all([fork(cardsSaga)]);
}
