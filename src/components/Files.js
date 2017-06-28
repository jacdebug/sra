import React from 'react';
import { Link } from 'react-router-dom';

const renderPaginationLink = (link, index) =>
  <Link key={index} to={link.url}>
    {link.type}
  </Link>;

const Files = ({ files, paginationLinks }) =>
  <div>
    <Link to="/files/search/name/gif/1">
      {' '}name like <gif />{' '}
    </Link>
    <p />
    <Link to="/files/sort/name/asc/1"> sort by name asc </Link> |
    <Link to="/files/sort/name/desc/1"> sort by name desc </Link>

    {files.map((file, index) =>

      <div key={index} className="filelist">
        <span>File id: {file.id}</span> 
        <span>File name: {file.name}</span> 
        <span>File desc: {file.desc}</span> 
        <span>File size: {file.name}</span> 
        <span>File size: {file.ext}</span> 
        <span>File size: {file.created}</span> 
      </div>

    )}


    <div>{paginationLinks.map(renderPaginationLink)}</div>
  </div>;

export default Files;
