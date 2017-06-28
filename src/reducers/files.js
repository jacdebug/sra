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

const files = (state = { files: [], paginationLinks: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_FILES':
      let paginationLinks = generatePaginationLinksData(action.response.links);
      return Object.assign(
        {},
        state,
        { files: action.response.files },
        { paginationLinks }
      );
    default:
      return state;
  }
};

export default files;
