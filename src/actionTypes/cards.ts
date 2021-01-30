export interface Card {
  id: string;
  campaignId: string;
  cardDescription: string;
  cardTitle: string;
  primaryMediaUrl: string;
  currentWorkflow: string;
  listOfPlans: object;
}

export const SET_CARDS = 'cardsActionTypes/SET_CARDS';
export interface SetCardsAction {
  type: typeof SET_CARDS;
  cards: Card[];
}

export const GET_CARDS = 'cardsActionTypes/GET_CARDS';
export interface GetCardsAction {
  type: typeof GET_CARDS;
  campaignId?: string;
}

export const GET_CARDS_REQUEST = 'cardsActionTypes/GET_CARDS_REQUEST';
export interface GetCardsRequestAction {
  type: typeof GET_CARDS_REQUEST;
}

export const GET_CARDS_SUCCESS = 'cardsActionTypes/GET_CARDS_SUCCESS';
export interface GetCardsSuccessAction {
  type: typeof GET_CARDS_SUCCESS;
  cards: Card[];
}

export const GET_CARDS_FAILURE = 'cardsActionTypes/GET_CARDS_FAILURE';
export interface GetCardsFailureAction {
  type: typeof GET_CARDS_FAILURE;
  error: Error | string;
}

export type CardsAction =
  | SetCardsAction
  | GetCardsAction
  | GetCardsRequestAction
  | GetCardsSuccessAction
  | GetCardsFailureAction;
