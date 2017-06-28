import { responseLinksToRouteUrl } from '../helpers/url';

const generatePaginationLinksData = links =>
  ['first', 'prev', 'next', 'last'].map(type => ({
    type,
    isEnabled: !!links[type],
    url: links[type] ? responseLinksToRouteUrl(links[type]) : '#',
  }));

const files = (
  state = { files: [], links: {}, paginationLinks: [] },
  action
) => {
  switch (action.type) {
    case 'RECEIVE_FILES':
      let paginationLinks =
        (action.response.links &&
          generatePaginationLinksData(action.response.links)) ||
        [];
      return Object.assign({}, state, action.response, { paginationLinks });
    default:
      return state;
  }
};

export default files;
