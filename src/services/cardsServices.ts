import axios from 'axios';

import { Card } from '../actionTypes/cards';

interface CardsResponse {
  cards: Card[];
}

export async function fetchCards(campaignId?: string): Promise<CardsResponse> {
  const url = campaignId
    ? `http://localhost:8080/cards?campaignId=${campaignId}`
    : 'http://localhost:8080/cards';
  // eslint-disable-next-line no-return-await
  return await axios.get(url);
}

export async function updateCard(
  cardId: string,
  cardTitle: string,
  newStatus: string
): Promise<CardsResponse> {
  // eslint-disable-next-line no-return-await
  return await axios.put(`http://localhost:8080/cards/${cardId}`, {
    cardTitle,
    newStatus,
  });
}
