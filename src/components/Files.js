import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import filesize from 'filesize';
import dateformat from 'dateformat';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #666;
  border: 2px solid #666;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
  font-size: 12px;
  font-family: tahoma;
`;

const FileList = styled.div``;

const FileListItem = styled.div`
  background: #f9f2f0;
  background: linear-gradient(to bottom, #fff9e7 0%, #f9f2f0 20%, #ffffff 100%);
  border-radius: 3px;
  border: 1px solid #e4d3d5;
  padding: 10px;
  margin: 5px 0;
  text-align: left;

  color: #444;
`;

const FileName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: inherit;
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
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;

  ${props =>
    props.left &&
    css`
		justify-content: flex-start;
	`} ${props =>
      props.right &&
      css`
		justify-content: flex-end;
	`};
`;

const renderPaginationLink = (link, index) =>
  <StyledLink key={index} to={link.url}>
    {link.type}
  </StyledLink>;

const Files = ({ files, paginationLinks, history }) =>
  <div>

    <Link to="/files/search/name/gif/1">
      {' '}name like <gif />{' '}
    </Link>
    <p />

    <Container>
      <input type="text" style={{'padding': '5px'}} placeholder="Seach by file name... " onKeyPress={(e) => {
    if (e.key === 'Enter') {
      history.push(`/files/search/name/${e.currentTarget.value}/1`)
    }
  }} />

      <p />

      <FlexContainer>
        <FlexContainer left>
          {paginationLinks.map(renderPaginationLink)}
        </FlexContainer>

        <div style={{ marginTop: '4px' }}>
          <label htmlFor="sort-select">Sort by: </label>
          <select id="sort-select" onChange={e=> {
              history.push(`/files/sort/${e.currentTarget.value}/asc/1`)
            }}>
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="ext">Ext</option>
            <option value="created">Created</option>
          </select>
        </div>
      </FlexContainer>

      <FileList>
        {files.map((file, index) =>
          <FileListItem key={index}>
            <FileName>
              {' '}{file.name}{' '}
            </FileName>
            <div>
              {file.desc}
            </div>

            <p />

            <div>
              <span>#{file.id}</span> |
              <span>{filesize(file.size)}</span> |
              <span>{file.ext}</span> |
              <span>{dateformat(file.created)}</span>
            </div>
          </FileListItem>
        )}
      </FileList>

      <FlexContainer left>
        {paginationLinks.map(renderPaginationLink)}
      </FlexContainer>
    </Container>
    <p />
  </div>;

export default Files;
