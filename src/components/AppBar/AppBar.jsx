import { Header, NavPanel, StyledNavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <NavPanel>
        <StyledNavLink to="/"> Home</StyledNavLink>
        <StyledNavLink to="/movies"> Movies</StyledNavLink>
      </NavPanel>
    </Header>
  );
};
