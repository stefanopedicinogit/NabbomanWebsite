import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { useMediaQuery } from "@material-ui/core";
import { Image } from "react-bootstrap";
import logoNabbo from "./logo_navbar.png";

const Navigation = styled.nav`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    /* Set flex-direction to column for mobile devices */
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /* Hide the menu on mobile devices */
    display: none;
  }

`;

const MenuItem = styled.li`
  margin: 0;
  padding: 10px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: #ccc;
  }
`;

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <>
    {location.pathname !== '/' && (    
    <Navigation>
      <Container>
      {isMobile ? (
                    <div></div>
                  ) : (
                    <Image alt="logo_nabbo" src={logoNabbo} width='220px' />
                    )}
        <Menu>
          <MenuItem>
            <MenuLink to="/home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog">Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/store">Store</MenuLink>
          </MenuItem>
        </Menu>
        <MenuToggle
          onClick={() => {
            console.log("MenuToggle clicked");
          }}
        />
      </Container>
    </Navigation>
  )}
</> 
);
};
export default Header