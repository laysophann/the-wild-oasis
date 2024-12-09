import styled from "styled-components";

const StyledHeader = styled.header`
  /* background-color: orange; */
  padding: 1.2rem 4.8 rem;
  border: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return <StyledHeader>header</StyledHeader>;
};

export default Header;
