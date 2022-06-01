import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './PersonalData.module.scss';

const inputList = [
  {
    id: 1,
    title: 'first name',
    type: 'text',
    placeholder: 'Input first name',
  },
  {
    id: 2,
    title: 'last name',
    type: 'text',
    placeholder: 'Input last name',
  },
  {
    id: 3,
    title: 'middle name',
    type: 'text',
    placeholder: 'Input middle name',
  },
  {
    id: 4,
    title: 'Birth date',
    type: 'date',
    placeholder: 'Pick date',
  },
  {
    id: 5,
    title: 'e-mail',
    type: 'e-mail',
    placeholder: 'Input e-mail',
  },
  {
    id: 6,
    title: 'Phone number',
    type: 'tel',
    placeholder: 'Input phone number',
  },
  {
    id: 7,
    title: 'home adress',
    type: 'text',
    placeholder: 'Input adress',
  },
];

export default function PersonalData() {
  return (
    <div className={classes.personalData}>
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
