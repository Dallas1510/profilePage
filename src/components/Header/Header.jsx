import React from 'react';
import logo from '../../img/logo/logo.svg';
import classes from './Header.module.scss';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__wrapp}>
          <div className={classes.logo}>
            <img src={logo} alt='logo' />
          </div>
          <p className={classes.brand}>Dnieper</p>
        </div>
      </Container>
    </header>
  );
}
