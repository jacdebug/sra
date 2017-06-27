import { call, put, fork, take, takeEvery, takeLatest, all } from 'redux-saga/effects'
import api from '../services'

function* fetchFiles() {
   try {
      const { response, error } = yield call(api.fetchFiles, '/files');
      yield put({type: "RECEIVE_FILES", response });
   } catch (e) {
      yield put({type: "FETCH_FILES_FAILED", message: e.message});
   }
}

function* watchLoadFiles() {
  yield takeLatest('FETCH_FILES', fetchFiles);
}

export default function* root() {
  yield all([
    fork(watchLoadFiles)
  ])
}