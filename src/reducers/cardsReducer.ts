import { Card, CardsAction, GET_CARDS_SUCCESS, SET_CARDS } from '../actionTypes/cards';


export interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [],
};

export default function cardsReducer(
  state: CardsState = initialState,
  action: CardsAction
): CardsState {
  switch (action.type) {
    case SET_CARDS:
    case GET_CARDS_SUCCESS:
      return {
        cards: action.cards,
      };
    default:
      return state;
  }
}
