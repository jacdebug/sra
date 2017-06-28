export const fetchAllFiles = params => ({
  type: 'FETCH_FILES',
  payload: {
    params,
  },
});

export const updateSearchTerm = query => ({
  type: 'UPDATE_SEARCH_TERM',
  payload: {
    query,
  },
});

export const updateSortBy = entity => ({
  type: 'UPDATE_SORTBY',
  payload: {
    entity,
  },
});
