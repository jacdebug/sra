export const getFiles = state => state.rootReducer.filesReducer.files;
export const getLinks = state => state.rootReducer.filesReducer.links;
export const getPaginationLinks = state =>
  state.rootReducer.filesReducer.paginationLinks;
export const getFormData = state => state.rootReducer.filesReducer.form;
