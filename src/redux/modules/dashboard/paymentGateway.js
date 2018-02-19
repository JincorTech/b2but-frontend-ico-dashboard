import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction, createAction } from '../../../utils/actions';

export const FETCH_CURRENCIES = 'dashboard/paymentGateway/FETCH_CURRENCIES';

export const fetchCurrencies = createAsyncAction(FETCH_CURRENCIES);

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
  )
}, initialState);
