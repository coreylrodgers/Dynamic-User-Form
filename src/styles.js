import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(160, 215, 201);
  background: #212429;
  padding: 10px;
`;

const PageBody = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  background: darkgrey;
  padding: 40px;
  min-height: 50vh;
`;

const Footer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  background: #212429;
  color: #fff;
`;

const Logo = styled.img`
`;

export { Wrapper, Header, Logo, PageBody, Footer };
