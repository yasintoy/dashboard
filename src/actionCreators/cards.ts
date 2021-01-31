import * as actions from '../actionTypes/cards';
import { Card } from '../actionTypes/cards';

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

export function updateCard(
  cardId: string,
  cardTitle: string,
  newStatus: string
): actions.UpdateCardAction {
  return {
    type: actions.UPDATE_CARD,
    cardId,
    cardTitle,
    newStatus,
  };
}

export function updateCardRequest(): actions.UpdateCardRequestAction {
  return {
    type: actions.UPDATE_CARD_REQUEST,
  };
}

export function updateCardsSuccess(
  cards: Card[]
): actions.UpdateCardsSuccessAction {
  return {
    type: actions.UPDATE_CARD_SUCCESS,
    cards,
  };
}

export function updateCardsFailure(
  error: Error | string
): actions.UpdateCardsFailureAction {
  return {
    type: actions.UPDATE_CARD_FAILURE,
    error,
  };
}
