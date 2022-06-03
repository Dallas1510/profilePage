import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavPanel.module.scss';

const classHandler = ({isActive}) => `${classes.link} ${isActive && classes.active}`;

export default function NavPanel() {
  return (
    <div className={classes.navPanel}>
      <NavLink className={classHandler} to='/'>Personal data</NavLink>
      <NavLink className={classHandler} to='/additional-data'>Additional data</NavLink>
      <NavLink className={classHandler} to='/interview'>Interview</NavLink>
    </div>
  );
}
