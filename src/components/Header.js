import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const NavItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`; 

function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>SEAFOOD GALLEY</Logo>
        </Left>
        <Right>
          <NavItem>HOME</NavItem>
          <NavItem>MENU</NavItem>
          <NavItem>GALLERY</NavItem>
          <NavItem>LOGIN</NavItem>
          <NavItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </NavItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header