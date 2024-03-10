import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #bdc3c7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 0.75rem 1rem;
    box-shadow: none;
  }
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0; 
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff; 
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem; 
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo>My ERP System</Logo>
      <NavLinks>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/orders">Orders</a></li>
        <li><a href="/calendarview">Calendar View</a></li>
      </NavLinks>
    </StyledNavbar>
  );
}

export default Navbar;
