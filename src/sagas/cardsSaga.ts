import { put, call, takeEvery, all, fork, delay } from 'redux-saga/effects';

import * as actionCreators from '../actionCreators/cards';
import * as actionTypes from '../actionTypes/cards';
import { fetchCards, updateCard } from '../services/cardsServices';

function* onLoadCards({ campaignId }: actionTypes.GetCardsAction) {
  try {
    yield put(actionCreators.getCardsRequest());
    const { data } = yield call(fetchCards, campaignId);

    yield put(actionCreators.getCardsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getCardsFailure(error));
  }
}

function* watchOnLoadCards() {
  yield takeEvery(actionTypes.GET_CARDS, onLoadCards);
}

function* onUpdateCard({
  cardId,
  cardTitle,
  newStatus,
}: actionTypes.UpdateCardAction) {
  try {
    yield put(actionCreators.updateCardRequest());
    const { data } = yield call(updateCard, cardId, cardTitle, newStatus);

    // wait 5 seconds. challenge requirement
    yield delay(5000);

    yield put(actionCreators.updateCardsSuccess(data));
  } catch (error) {
    yield put(actionCreators.updateCardsFailure(error));
  }
}

function* watchOnUpdateCard() {
  yield takeEvery(actionTypes.UPDATE_CARD, onUpdateCard);
}

export default function* cardsSaga() {
  yield all([fork(watchOnLoadCards)]);
  yield all([fork(watchOnUpdateCard)]);
}
