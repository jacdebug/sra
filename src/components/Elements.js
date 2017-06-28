import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
  font-size: 12px;
  font-family: tahoma;
`;

export const FlexContainer = styled.div`
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
