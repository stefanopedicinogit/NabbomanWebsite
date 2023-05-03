import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;

  @media (min-width: 768px) {
    /* Hide the menu on mobile devices */
    display: none;
  }
`;

const CloseIcon = styled(FaTimes)`
  margin-right: 10px;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
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

const MenuLink = styled.a`
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

const MenuToggle = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <>
      <ToggleButton onClick={handleClick}>
        {isOpen ? <CloseIcon /> : <FaBars />}
      </ToggleButton>
      {isOpen && (
        <Menu>
          <MenuItem>
            <MenuLink href="/home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/about">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/blog">Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/store">Store</MenuLink>
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default MenuToggle;