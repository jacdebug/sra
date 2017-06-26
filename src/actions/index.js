const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`
        return acc
    }, {})
}

export const FILE = createRequestTypes('FILE')

function action(type, payload = {}) {
    return { type, ...payload }
}

export const file = {
  request: list => action(FILE[REQUEST], {list}),
  success: (list, response) => action(FILE[SUCCESS], {list, response}),
  failure: (list, error) => action(FILE[FAILURE], {list, error}),
}

export const RECEIVE_FILES = 'RECEIVE_FILES';
export const LOAD_FILES_PAGE = 'LOAD_FILES_PAGE';
export const loadFilesPage = () => action(LOAD_FILES_PAGE)


export const fetchAllFiles = () => ({ type: 'FETCH_FI'})