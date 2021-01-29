import axios from 'axios';

import { Card } from '../actionTypes/cards';

interface CardsResponse {
  cards: Card[];
}

export async function fetchCards(): Promise<CardsResponse> {
  // eslint-disable-next-line no-return-await
  return await axios.get('');
}
