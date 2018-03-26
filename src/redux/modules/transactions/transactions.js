import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction, createAction } from '../../../utils/actions';

export const FETCH_TRANSACTIONS = 'transactions/transactions/FETCH_TRANSACTIONS';
export const OPEN_DETAILS_POPUP = 'transactions/transactions/OPEN_DETAILS_POPUP';
export const CLOSE_DETAILS_POPUP = 'transactions/transactions/CLOSE_DETAILS_POPUP';

export const fetchTransactions = createAsyncAction(FETCH_TRANSACTIONS);
export const openDetailsPopup = createAction(OPEN_DETAILS_POPUP);
export const closeDetailsPopup = createAction(CLOSE_DETAILS_POPUP);

const initialState = from({
  transactions: [],
  detailsPopupIsOpened: false,
  selectedTransactionId: null
});

export default createReducer({
  [fetchTransactions.SUCCESS]: (state, { payload }) => (
    state.merge({
      transactions: payload
    })
  ),

  [OPEN_DETAILS_POPUP]: (state, { payload }) => (
    state.merge({
      detailsPopupIsOpened: true,
      selectedTransactionId: payload
    })
  ),

  [CLOSE_DETAILS_POPUP]: (state) => (
    state.merge({
      detailsPopupIsOpened: false,
      selectedTransactionId: null
    })
  )
}, initialState);
