import React from 'react';
import { Navbar, Container, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogOutButton from './components/logoutButton.js';
import LoginButton from './components/loginButton.js';
import LanguageButton from './components/languageButton.js';
import routes from '../../services/routes.js';

const Header = () => (
  <Navbar bg="wight" expand="lg" className="shadow-sm">
    <Container>
      <Navbar.Brand as={Link} to={routes.chatRoute()}>Hexlet Chat</Navbar.Brand>
      <ButtonGroup>
        <LanguageButton />
        <LogOutButton />
        <LoginButton />
      </ButtonGroup>
    </Container>
  </Navbar>
);

export default Header;
