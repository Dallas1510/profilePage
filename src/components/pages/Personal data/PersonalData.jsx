import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './PersonalData.module.scss';
import Textarea from '../../UI/Input/Textarea';

const inputList = [
  {
    id: 1,
    teg: 'input',
    title: 'first name',
    type: 'text',
    placeholder: 'Input first name',
  },
  {
    id: 2,
    teg: 'input',
    title: 'last name',
    type: 'text',
    placeholder: 'Input last name',
  },
  {
    id: 3,
    teg: 'input',
    title: 'middle name',
    type: 'text',
    placeholder: 'Input middle name',
  },
  {
    id: 4,
    teg: 'input',
    title: 'Birth date',
    type: 'date',
    placeholder: 'Pick date',
  },
  {
    id: 5,
    teg: 'input',
    title: 'e-mail',
    type: 'e-mail',
    placeholder: 'Input e-mail',
  },
  {
    id: 6,
    teg: 'input',
    title: 'Phone number',
    type: 'tel',
    placeholder: 'Input phone number',
  },
  {
    id: 7,
    teg: 'input',
    title: 'home adress',
    type: 'text',
    placeholder: 'Input adress',
  },
];

export default function PersonalData() {
  return (
    <div className={classes.personalData}>
      {inputList.map(
        (input) =>
          (input.teg === 'input' && (
            <Input
              key={input.id}
              title={input.title}
              type={input.type}
              placeholder={input.placeholder}
            />
          )) ||
          (input.teg === 'textarea' && (
            <Textarea
              key={input.id}
              title={input.title}
              placeholder={input.placeholder}
            />
          ))
      )}
    </div>
  );
}
