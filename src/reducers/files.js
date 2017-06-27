const files = (state = { filesVisibleId: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_FILES':
      return Object.assign({}, state, { filesVisibleId: action.response.result })
    default:
      return state;
  }
};

export default files;