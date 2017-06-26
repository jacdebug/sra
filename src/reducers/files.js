

const files = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FI':
      return {...action.data.response};
    default:
      return state;
  }
};

export default files;