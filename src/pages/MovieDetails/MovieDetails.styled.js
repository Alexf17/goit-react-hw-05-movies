import { NavLink } from 'react-router-dom';
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

export const ImgBlock = styled.div`
  width: 400px;
`;

export const Img = styled.img`
  display: block;
  width: 280px;
  margin-left: 30px;
  margin-right: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const InfoBlock = styled.div`
  max-width: 500px;
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

export const InfoBlockTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoItem = styled.li`
  margin-right: 15px;
`;
export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &.active {
    color: #a5b9ca;
    font-weight: 600;
    text-decoration: underline;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #a5b9ca;
    font-weight: 600;
  }
`;
