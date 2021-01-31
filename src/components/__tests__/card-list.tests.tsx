import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../../actionTypes/cards';
import CardList, { Props } from '../CardList';

describe('card list', () => {
  it('check loading while card list is rendering ', () => {
    const cards: Array<Card> = [];
    const { container } = render(
      <CardList
        cards={cards}
        isCardUpdateLoading={true}
        handleCardUpdate={() => {}}
      />
    );
    expect(container.getElementsByClassName('loading').length).toBe(1);
  });

  it('check card count in list view', () => {
    const cards: Array<Card> = [
      {
        id: '123',
        campaignId: '124432',
        cardTitle: 'title1',
        cardDescription: 'desc',
        primaryMediaUrl: 'url',
        currentWorkflow: 'active',
        listOfPlans: [
          {
            price: {
              currentSymbol: '$',
              amount: 14,
              current: 'dolar',
            },
          },
        ],
        likes: 0,
        shares: 0,
        views: 0,
      },
      {
        id: '12345',
        campaignId: '124431432',
        cardTitle: 'title2',
        cardDescription: 'desc',
        primaryMediaUrl: 'url',
        currentWorkflow: 'active',
        listOfPlans: [
          {
            price: {
              currentSymbol: '$',
              amount: 14,
              current: 'dolar',
            },
          },
        ],
        likes: 0,
        shares: 0,
        views: 0,
      },
    ];

    const { container } = render(
      <CardList
        cards={cards}
        isCardUpdateLoading={false}
        handleCardUpdate={() => {}}
      />
    );
    expect(container.getElementsByClassName('card').length).toBe(2);
  });

  it('should give an error if you dont pass unique key', () => {
    const cards: Array<Card> = [
      {
        id: '123',
        campaignId: '124432',
        cardTitle: 'title',
        cardDescription: 'desc',
        primaryMediaUrl: 'url',
        currentWorkflow: 'active',
        listOfPlans: [
          {
            price: {
              currentSymbol: '$',
              amount: 14,
              current: 'dolar',
            },
          },
        ],
        likes: 0,
        shares: 0,
        views: 0,
      },
      {
        id: '12345',
        campaignId: '124431432',
        cardTitle: 'title',
        cardDescription: 'desc',
        primaryMediaUrl: 'url',
        currentWorkflow: 'active',
        listOfPlans: [
          {
            price: {
              currentSymbol: '$',
              amount: 14,
              current: 'dolar',
            },
          },
        ],
        likes: 0,
        shares: 0,
        views: 0,
      },
    ];
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <CardList
        cards={cards}
        isCardUpdateLoading={false}
        handleCardUpdate={() => {}}
      />
    );
    expect(consoleSpy).toHaveBeenCalled();
  });
});
