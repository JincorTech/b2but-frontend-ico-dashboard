import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction, createAction } from '../../../utils/actions';

export const FETCH_CURRENCIES = 'dashboard/paymentGateway/FETCH_CURRENCIES';
export const SELECT_CURRENCY = 'dashboard/paymentGateway/SELECT_CURRENCY';

export const fetchCurrencies = createAsyncAction(FETCH_CURRENCIES);
export const selectCurrency = createAction(SELECT_CURRENCY);

const initialState = from({
  tokenValue: 0,
  selectedCurrency: 'ETH',
  currencies: {}
});

export default createReducer({
  [fetchCurrencies.SUCCESS]: (state, { payload }) => (
    state.merge({
      currencies: payload
    })
  ),

  [SELECT_CURRENCY]: (state, { payload }) => (
    state.merge({
      selectedCurrency: payload
    })
  ),
}, initialState);
