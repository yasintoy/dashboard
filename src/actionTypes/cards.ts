export interface Card {
  id: string;
  campaignId: string;
  cardDescription: string;
  cardTitle: string;
  primaryMediaUrl: string;
  currentWorkflow: string;
  listOfPlans: object;
  likes: number;
  shares: number;
  views: number;
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

export const UPDATE_CARD = 'cardsActionTypes/UPDATE_CARD';
export interface UpdateCardAction {
  type: typeof UPDATE_CARD;
  cardId: string;
  cardTitle: string;
  newStatus: string;
}

export const UPDATE_CARD_REQUEST = 'cardsActionTypes/UPDATE_CARD_REQUEST';
export interface UpdateCardRequestAction {
  type: typeof UPDATE_CARD_REQUEST;
}

export const UPDATE_CARD_SUCCESS = 'cardsActionTypes/UPDATE_CARD_SUCCESS';
export interface UpdateCardsSuccessAction {
  type: typeof UPDATE_CARD_SUCCESS;
  cards: Card[];
}

export const UPDATE_CARD_FAILURE = 'cardsActionTypes/UPDATE_CARD_FAILURE';
export interface UpdateCardsFailureAction {
  type: typeof UPDATE_CARD_FAILURE;
  error: Error | string;
}

export type CardsAction =
  | GetCardsAction
  | GetCardsRequestAction
  | GetCardsSuccessAction
  | GetCardsFailureAction
  | UpdateCardAction
  | UpdateCardRequestAction
  | UpdateCardsSuccessAction
  | UpdateCardsFailureAction;
