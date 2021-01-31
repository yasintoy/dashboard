import axios from 'axios';

import { Card } from '../actionTypes/cards';
import Config from '../config/index';

const { BASE_URL } = Config;

interface CardsResponse {
  cards: Card[];
}

export async function fetchCards(campaignId?: string): Promise<CardsResponse> {
  const url = campaignId
    ? `${BASE_URL}/cards?campaignId=${campaignId}`
    : `${BASE_URL}/cards`;
  return axios.get(url);
}

export async function updateCard(
  cardId: string,
  cardTitle: string,
  newStatus: string
): Promise<CardsResponse> {
  return axios.put(`${BASE_URL}/cards/${cardId}`, {
    cardTitle,
    newStatus,
  });
}
