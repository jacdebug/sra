import queryString from 'query-string';

const generatePaginationLinksData = links =>
  ['first', 'prev', 'next', 'last'].map(type => {
    let linkData = (links && links[type]) || null;

    return {
      type,
      isEnabled: !!linkData,
      queryString: `?${linkData ? linkData.url.split('?')[1] : ''}`,
      linkData,
    };
  });

const files = (
  state = { files: [], paginationLinks: [], form: {} },
  action
) => {
  switch (action.type) {
    case 'RECEIVE_FILES':
      let paginationLinks = generatePaginationLinksData(action.response.links);
      return Object.assign(
        {},
        state,
        { files: action.response.files },
        { paginationLinks }
      );

    case 'FETCH_FILES':
      let form = {},
        parsed = queryString.parse(action.payload.params);
      form.searchTerm = parsed.name_like;
      form.sortBy = parsed._sort;
      return Object.assign({}, state, { form });

    case 'UPDATE_SEARCH_TERM':
      return Object.assign({}, state, {
        form: { searchTerm: action.payload.query },
      });

    case 'UPDATE_SORTBY':
      return Object.assign({}, state, {
        form: { sortBy: action.payload.entity },
      });

    default:
      return state;
  }
};

export default files;
