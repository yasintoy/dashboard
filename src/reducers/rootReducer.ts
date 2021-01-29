import { combineReducers } from 'redux';

import campaignsReducer from './campaignsReducer';
import cardsReducer from './cardsReducer';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
  cards: cardsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export default rootReducer;
