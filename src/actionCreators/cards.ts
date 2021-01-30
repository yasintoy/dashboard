import * as actions from '../actionTypes/cards';
import { Card } from '../actionTypes/cards';

export function setCards(cards: Card[]): actions.SetCardsAction {
  return {
    type: actions.SET_CARDS,
    cards,
  };
}

export function getCards(campaignId?: string): actions.GetCardsAction {
  return {
    type: actions.GET_CARDS,
    campaignId,
  };
}

export function getCardsRequest(): actions.GetCardsRequestAction {
  return {
    type: actions.GET_CARDS_REQUEST,
  };
}

export function getCardsSuccess(cards: Card[]): actions.GetCardsSuccessAction {
  return {
    type: actions.GET_CARDS_SUCCESS,
    cards,
  };
}

export function getCardsFailure(
  error: Error | string
): actions.GetCardsFailureAction {
  return {
    type: actions.GET_CARDS_FAILURE,
    error,
  };
}
