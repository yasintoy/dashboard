import * as actionTypes from '../../actionTypes/cards';
import { Card as ICard } from '../../actionTypes/cards';
import * as actionCreators from '../../actionCreators/cards';

describe('cards actions', () => {
  const cards: Array<ICard> = [
    {
      id: '123',
      campaignId: '124432',
      cardTitle: 'title',
      cardDescription: 'desc',
      primaryMediaUrl: 'url',
      currentWorkflow: 'active',
      listOfPlans: [],
      likes: 0,
      shares: 0,
      views: 0,
    },
  ];

  it('should get cards', () => {
    const expectedAction = {
      type: actionTypes.GET_CARDS,
    };
    expect(actionCreators.getCards()).toEqual(expectedAction);
  });

  it('should get cards with campaignId', () => {
    const campaignId = '123';
    const expectedAction = {
      type: actionTypes.GET_CARDS,
      campaignId,
    };
    expect(actionCreators.getCards(campaignId)).toEqual(expectedAction);
  });

  it('should set cards after success action', () => {
    const expectedAction = {
      type: actionTypes.GET_CARDS_SUCCESS,
      cards,
    };
    expect(actionCreators.getCardsSuccess(cards)).toEqual(expectedAction);
  });

  it('should send cards request action', () => {
    const expectedAction = {
      type: actionTypes.GET_CARDS_REQUEST,
    };
    expect(actionCreators.getCardsRequest()).toEqual(expectedAction);
  });

  it('should send cards request action', () => {
    const error = 'CARD ERROR TEST';
    const expectedAction = {
      type: actionTypes.GET_CARDS_FAILURE,
      error,
    };
    expect(actionCreators.getCardsFailure(error)).toEqual(expectedAction);
  });
});
