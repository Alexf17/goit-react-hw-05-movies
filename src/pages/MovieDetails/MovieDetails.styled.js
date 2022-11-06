import styled from 'styled-components';

export const GoBackButton = styled.button`
  cursor: pointer;
  background-color: #38539f;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  margin-left: 30px;

  &:hover,
  &:focus {
    background-color: #a39cf4;
  }
`;

export const Img = styled.img`
  display: block;
  width: 360px;
  margin-left: 30px;
  margin-right: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
export const FilmTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const OverviewTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const GenresTitle = styled.h4`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  font-weight: 400;
  margin-bottom: 10px;
`;
