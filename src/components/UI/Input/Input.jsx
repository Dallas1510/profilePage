import React from 'react';
import classes from './Input.module.scss'

export default function Input( {title, type, placeholder}) {

  return (
    <div className={classes.wrapp}>
      <label className={classes.label} htmlFor={title}>{title}</label>
      <input className={classes.input} type={type} id={title} placeholder={placeholder}/>
    </div>
  );
}
