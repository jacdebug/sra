import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FlexContainer } from './Elements';

const Pagination = ({ paginationLinks }) =>
  <FlexContainer left>
    {paginationLinks.map(renderPaginationLink)}
  </FlexContainer>;

const renderPaginationLink = (link, index) =>
  <StyledLink
    disabled={!link.isEnabled}
    key={index}
    to={`/files${link.queryString}`}
  >
    {link.type}
  </StyledLink>;

export const StyledLink = styled(Link)`
  margin: 2px;
  padding: 3px 4px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: rgba(175, 47, 47, 0.1);
  text-transform: uppercase;
  color: #444;
  &:first-child { margin-left: 0; }
  &:hover {  }
  &.selected { border-color: rgba(175, 47, 47, 0.2); }
  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
	`}
`;

export default Pagination;
