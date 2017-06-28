import { call, put, fork, takeLatest, all } from 'redux-saga/effects';

import api from '../services';

function* fetchFiles(payload) {
  try {
    const { response } = yield call(api.fetchFiles, payload);
    yield put({ type: 'RECEIVE_FILES', response });
  } catch (e) {
    yield put({ type: 'FETCH_FILES_FAILED', message: e.message });
  }
}

function* watchLoadFiles() {
  yield takeLatest('FETCH_FILES', fetchFiles);
}

export default function* root() {
  yield all([fork(watchLoadFiles)]);
}
