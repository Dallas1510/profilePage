import React from 'react';
import Input from '../../UI/Input/Input';
import Textarea from '../../UI/Input/Textarea';
import classes from './Interview.module.scss';

export default function Interview() {
  return (
    <div className={classes.interview}>
      <div>
        <Input title='interview date' type='date' placeholder='Pick date' />
        <Input
          title='interview topics'
          type='text'
          placeholder='Input topics'
        />
      </div>
      <Textarea
        title='conclusions'
        placeholder='Input conclusions'
        size='big'
      />
    </div>
  );
}
