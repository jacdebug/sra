import React from 'react';
import styled from 'styled-components';

const SortbySelect = ({ sortedBy, sortOnChange }) =>
  <Container>
    <label htmlFor="sort-select">Sort by: </label>
    <select id="sort-select" onChange={sortOnChange}>
      <option value="id">Id</option>
      <option value="name">Name</option>
      <option value="size">Size</option>
      <option value="ext">Ext</option>
      <option value="created">Created</option>
    </select>
  </Container>;

const Container = styled.div`margin: 4px 0 0;`;
export default SortbySelect;
