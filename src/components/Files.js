import React from 'react';
import File from './File';
import SearchInput from './SearchInput';
import SortbySelect from './SortbySelect';
import Pagination from './Pagination';
import styled from 'styled-components';
import { FlexContainer, Container } from './Elements';

export const FileList = styled.div``;

const Files = ({ files, ...otherProps }) =>
  <Container>
    <SearchInput {...otherProps} />

    <FlexContainer>
      <Pagination {...otherProps} />
      <SortbySelect {...otherProps} />
    </FlexContainer>

    <FileList>
      {files.length
        ? files.map((file, index) => <File key={index} file={file} />)
        : <div>No files</div>}
    </FileList>

    <Pagination {...otherProps} />
  </Container>;

export default Files;
