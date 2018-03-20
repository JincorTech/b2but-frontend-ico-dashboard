import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get, post } from '../../utils/fetch';

import { fetchCurrencies, createTransaction } from '../../redux/modules/dashboard/paymentGateway';
import transformCreateTransactionResponse from '../../helpers/transformers/paymentGateway/paymentDetails';

/**
 * Fetch Currencies
 */

function* fetchCurrenciesIterator() {
  try {
    const data = yield call(get, '/gateway/currencies');
    yield put(fetchCurrencies.success(data));
  } catch (e) {
    yield put(fetchCurrencies.failure(e));
  }
}

function* fetchCurrenciesSaga() {
  yield takeLatest(
    fetchCurrencies.REQUEST,
    fetchCurrenciesIterator
  );
}

/**
 * Create Transaction
 */

function* createTransactionIterator({ payload }) {
  try {
    const data = yield call(post, '/gateway/createTransaction', payload);
    yield put(createTransaction.success(transformCreateTransactionResponse(data)));
  } catch (e) {
    yield put(createTransaction.failure(e));
  }
}

function* createTransactionSaga() {
  yield takeLatest(
    createTransaction.REQUEST,
    createTransactionIterator
  );
}

/**
 * Export
 */

export default function* () {
  yield all([
    fork(fetchCurrenciesSaga),
    fork(createTransactionSaga)
  ]);
}
