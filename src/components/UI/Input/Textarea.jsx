import React from 'react'
import classes from './Input.module.scss'

export default function Textarea( {title, placeholder, size}) {

  return (
    <div className={classes.wrapp}>
      <label className={classes.label} htmlFor={title}>{title}</label>
      <textarea className={`${classes.textarea} ${classes[size]}`} id={title} placeholder={placeholder}/>
    </div>
  );
}