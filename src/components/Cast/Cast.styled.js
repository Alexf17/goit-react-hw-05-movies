import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(400px, auto);
  grid-gap: 25px;
  margin: 0 auto;
  padding: 0;
`;
export const Li = styled.li`
  overflow: hidden;
  border-radius: 20px;
`;
export const Img = styled.img`
  width: 100%;
  height: 350px;
`;

export const Wrap = styled.div`
  padding: 20px;
`;
export const ErrorText = styled.p`
  margin-top: 20px;
  font-size: 30px;
`;
