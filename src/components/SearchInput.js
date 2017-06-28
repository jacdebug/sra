import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ searchTerm, searchKeyPress }) =>
  <input
    type="text"
    placeholder="Seach by file name... "
    value={searchTerm}
    onKeyPress={searchKeyPress}
    onChange={searchKeyPress}
  />;

export const StyledInput = styled.input`padding: 5px;`;
export default SearchInput;
