import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction, createAction } from '../../../utils/actions';

export const FETCH_CURRENCIES = 'dashboard/paymentGateway/FETCH_CURRENCIES';
export const SELECT_CURRENCY = 'dashboard/paymentGateway/SELECT_CURRENCY';
export const CREATE_TRANSACTION = 'dashboard/paymentGateway/CREATE_TRANSACTION';
export const CLOSE_PAYMENT_POPUP = 'dashboard/paymentGateway/CLOSE_PAYMENT_POPUP';

export const fetchCurrencies = createAsyncAction(FETCH_CURRENCIES);
export const selectCurrency = createAction(SELECT_CURRENCY);
export const createTransaction = createAsyncAction(CREATE_TRANSACTION);
export const closePaymentPopup = createAction(CLOSE_PAYMENT_POPUP);

const initialState = from({
  tokenValue: 0,
  selectedCurrency: 'ETH',
  currencies: {},
  paymentData: {},
  paymentPopupIsOpen: false,
  spinner: false
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

  [createTransaction.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [createTransaction.SUCCESS]: (state, { payload }) => (
    state.merge({
      paymentPopupIsOpen: true,
      paymentData: payload,
      spinner: false
    })
  ),

  [createTransaction.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [CLOSE_PAYMENT_POPUP]: (state) => (
    state.merge({
      paymentPopupIsOpen: false
    })
  ),
}, initialState);
