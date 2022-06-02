import React from 'react';
import PersonInfo from '../PersonInfo/PersonInfo';
import NavPanel from '../NavPanel/NavPanel';
import classes from './ProfileInfo.module.scss'

export default function ProfileInfo() {
  return (
    <div className={classes.profile}>
      <NavPanel />
			<PersonInfo/>
    </div>
  );
}
