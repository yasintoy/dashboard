import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import * as actionCreators from '../actionCreators/cards';
import * as actionTypes from '../actionTypes/cards';
import { Card } from '../actionTypes/cards';

function* onLoadCards({ campaignId }: actionTypes.GetCardsAction) {
  try {
    yield put(actionCreators.getCardsRequest());
    // const { data } = yield call(fetchCards);
    const data: Card[] = [
      {
        id: '1',
        campaignId: '2',
        cardDescription: 'description',
        cardTitle: 'title',
        primaryMediaUrl: 'https://loremflickr.com/750/400',
        currentWorkflow: 'paused',
        listOfPlans: [
          {
            price: { amount: '47800', currency: 'JPY', currencySymbol: '¥' },
          },
        ],
      },
    ];
    yield put(actionCreators.getCardsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getCardsFailure(error));
  }
}

function* watchOnLoadCards() {
  yield takeEvery(actionTypes.GET_CARDS, onLoadCards);
}

export default function* cardsSaga() {
  yield all([fork(watchOnLoadCards)]);
}
