import React from 'react';
import PersonInfo from '../PersonInfo/PersonInfo';
import Title from '../Title/Title';
import classes from './ProfileInfo.module.scss'

export default function ProfileInfo() {
  return (
    <div className={classes.profile}>
      <Title title='Personal data'/>
			<PersonInfo/>
    </div>
  );
}
