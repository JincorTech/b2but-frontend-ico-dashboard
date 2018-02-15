import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction, createAction } from '../../../utils/actions';

export const FETCH_DASHBOARD = 'dashboard/dashboard/FETCH_DASHBOARD';
export const CHANGE_TAB = 'dashboard/dashboard/CHANGE_TAB';

export const fetchDashboard = createAsyncAction(FETCH_DASHBOARD);
export const changeTab = createAction(CHANGE_TAB);

const initialState = from({
  selectedTab: 'deposit',
  ethBalance: 0,
  jcrTokensSold: 0,
  jcrTokenBalance: 0,
  jcrTokenPrice: {
    ETH: 0,
    USD: 0
  },
  raised: {
    ETH: 0,
    USD: 0,
    BTC: 0
  },
  daysLeft: 0
});

export default createReducer({
  [CHANGE_TAB]: (state, { payload }) => (
    state.merge({
      selectedTab: payload
    })
  ),

  [fetchDashboard.SUCCESS]: (state, { payload }) => (
    state.merge({
      ...payload
    })
  )
}, initialState);
