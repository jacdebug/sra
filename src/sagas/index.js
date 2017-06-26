import { call, put,take, takeEvery, takeLatest } from 'redux-saga/effects'
import { api } from '../services'

/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn

/*
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response)
    yield put( entity.success(id, response) )
  else  
    yield put( entity.failure(id, error) )
}



export const fetchFiles   = fetchEntity.bind(null, repo, api.fetchFiles)



// load repo unless it is cached
function* loadFiles() {
  yield call(fetchFiles)

  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response)
    yield put( entity.success(id, response) )
  else
    yield put( entity.failure(id, error) )


}
*/

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// Fetches data for a Repo: repo data + repo stargazers
/*
function* watchLoadFilesPage() {
  while(true) {
    yield take(actions.LOAD_REPO_PAGE)

    yield fork(loadFiles)
  }
}
*/

/*
export default function* root() {
  yield all([
    fork(watchLoadRepoPage)
  ])
}
*/


function* fetchFi() {  
  console.log('fetchFi');
   try {
      const data = yield call(api.fetchFiles, 'http://localhost:3003/files');
      yield put({type: "RECEIVE_FI", data });
   } catch (e) {
      yield put({type: "FI_FETCH_FAILED", message: e.message});
   }
}

function* fetchSagaFi() {  
  console.log('fetchSagaFi');
  yield takeLatest('FETCH_FI', fetchFi);
  //yield call(fetchFi);
}

export default fetchSagaFi;  