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
  color: #444;
  margin: 2px;
  padding: 3px 4px;
  text-decoration: none;
  border: 1px solid rgba(175, 47, 47, 0.1);
  border-radius: 3px;
  text-transform: uppercase;
  &:first-child { margin-left: 0; }
  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
	`}
`;

export default Pagination;
