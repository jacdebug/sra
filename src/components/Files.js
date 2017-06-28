import React from 'react';
import { Link } from 'react-router-dom';

const renderPaginationLink = (link, index) =>
  <Link key={index} to={link.url}>
    {link.type}
  </Link>;

const Files = ({ files, paginationLinks }) =>
  <div>
    <Link to="/files/search/name/git/1"> name like git </Link>
    <p />
    <Link to="/files/sort/name/asc/1"> sort by name asc </Link> |
    <Link to="/files/sort/name/desc/1"> sort by name desc </Link>
    {files.map((file, index) =>
      <div key={index}>
        {file.name}
      </div>
    )}
    <div>{paginationLinks.map(renderPaginationLink)}</div>
  </div>;

export default Files;
