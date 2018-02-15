import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';

import { fetchCurrencies } from '../../redux/modules/dashboard/paymentGateway';

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
 * Export
 */

export default function* () {
  yield all([
    fork(fetchCurrenciesSaga)
  ]);
}
