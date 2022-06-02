import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavPanel.module.scss';

export default function NavPanel() {
  return (
    <div className={classes.navPanel}>
      <NavLink className={classes.link} to='/personal-data'>Personal data</NavLink>
      <NavLink className={classes.link} to='/additional-data'>Additional data</NavLink>
      <NavLink className={classes.link} to='/interview'>Interview</NavLink>
    </div>
  );
}
