import React from 'react';
import filesize from 'filesize';
import dateformat from 'dateformat';
import styled from 'styled-components';

const File = ({ file }) =>
  <FileListItem>
    <FileName>
      {file.name}
    </FileName>

    <div>
      {file.desc}
    </div>

    <FileMeta>
      <span>#{file.id}</span> |
      <span>{filesize(file.size)}</span> |
      <span>{file.ext}</span> |
      <span>{dateformat(file.created)}</span>
    </FileMeta>
  </FileListItem>;

const FileListItem = styled.div`
  color: #444;
  background: #f9f2f0;
  background: linear-gradient(to bottom, #fff9e7 0%, #f9f2f0 20%, #ffffff 100%);
  border-radius: 3px;
  border: 1px solid #e4d3d5;
  padding: 10px;
  margin: 5px 0;
  text-align: left;
`;

const FileName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const FileMeta = styled.div`margin: 10px 0 0;`;

export default File;
