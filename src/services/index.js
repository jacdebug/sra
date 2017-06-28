import parse from 'parse-link-header';

const API_ROOT = 'http://localhost:3003/files';

function callApi(payload) {
  const fullUrl = API_ROOT + (payload.payload.params || '?_page=1');

  return fetch(fullUrl)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Object.assign(
        {},
        { files: json },
        { links: parse(response.headers.get('link')) }
      );
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}

// api services
export default {
  fetchFiles: params => callApi(params),
};
