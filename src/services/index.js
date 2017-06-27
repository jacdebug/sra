import { schema, normalize } from 'normalizr'
import parse from 'parse-link-header'

const API_ROOT = 'http://localhost:3003/files?_page=1';

const fileEntity = new schema.Entity('files');
const fileArray = new schema.Array(fileEntity); 

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi() {
  const fullUrl = API_ROOT;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return Object.assign({}
        ,normalize(json, fileArray)
        ,parse(response.headers.get('link'))
      )
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )

}

// api services
export default {
  fetchFiles: login => callApi()
};