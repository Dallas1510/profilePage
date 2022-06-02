import React from 'react';
import classes from './AdditionalData.module.scss';
import Input from '../../UI/Input/Input';

const inputList = [
  {
    id: 1,
    title: 'education',
    type: 'text',
    placeholder: 'Input education',
  },
  {
    id: 2,
    title: 'job experience',
    type: 'text',
    placeholder: 'Input job experience',
  },
  {
    id: 3,
    title: 'skills (stacks)',
    type: 'text',
    placeholder: 'Input skills',
  },
  {
    id: 4,
    title: 'english level',
    type: 'text',
    placeholder: 'Input english level',
  },
];

export default function AdditionalData() {
  return (
    <div className={classes.additionalData}>
      {inputList.map((input) => (
        <Input
          key={input.id}
          title={input.title}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </div>
  );
}
