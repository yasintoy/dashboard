import { combineReducers } from 'redux';

import campaignsReducer from './campaignsReducer';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export default rootReducer;
