import * as React from 'react';
import { render } from '@testing-library/react';
import { Card as ICard } from '../../actionTypes/cards';
import Card from '../Card';

describe('card view', () => {
  it('check card count in list view', () => {
    const card: ICard = {
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
    };

    const { container } = render(
      <Card card={card} id="123" handleCardUpdate={() => {}} />
    );
    expect(container.getElementsByClassName('card').length).toBe(1);
  });
});
