import styled from 'styled-components';

export const Wrap = styled.div``;

export const Li = styled.li`
  border-bottom: 1px solid;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const ErrorText = styled.p`
  margin-top: 20px;
  font-size: 30px;
`;
