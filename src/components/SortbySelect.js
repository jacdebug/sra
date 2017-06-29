import React from 'react';
import styled from 'styled-components';

const SortbySelect = ({ sortBy, sortOnChange }) =>
  <Container>
    <label htmlFor="sort-select">Sort by: </label>
    <select id="sort-select" value={sortBy} onChange={sortOnChange}>
      {[
        { id: 'id', label: 'Id' },
        { id: 'name', label: 'Name' },
        { id: 'size', label: 'Size' },
        { id: 'ext', label: 'Ext' },
        { id: 'created', label: 'Created' },
      ].map((ele, index) => {
        return false
          ? <option key={index} selected value={ele.id}>
              {ele.label}
            </option>
          : <option key={index} value={ele.id}>
              {ele.label}
            </option>;
      })}
    </select>
  </Container>;

const Container = styled.div`margin: 4px 0 0;`;
export default SortbySelect;
