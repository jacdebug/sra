import React from 'react';

const SearchInput = ({ searchTerm, searchKeyPress }) =>
  <input
    type="search"
    placeholder="Seach by file name... "
    value={searchTerm}
    onKeyPress={searchKeyPress}
    onChange={searchKeyPress}
  />;

export default SearchInput;
