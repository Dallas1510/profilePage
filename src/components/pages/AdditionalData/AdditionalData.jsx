import React from 'react';
import classes from './AdditionalData.module.scss';
import Input from '../../UI/Input/Input';
import Textarea from '../../UI/Input/Textarea';

const inputList = [
  {
    id: 1,
    teg: 'textarea',
    title: 'education',
    type: 'text',
    placeholder: 'Input education',
  },
  {
    id: 2,
    teg: 'textarea',
    title: 'job experience',
    type: 'text',
    placeholder: 'Input job experience',
  },
  {
    id: 3,
    teg: 'textarea',
    title: 'skills (stacks)',
    type: 'text',
    placeholder: 'Input skills',
  },
  {
    id: 4,
    teg: 'textarea',
    title: 'english level',
    type: 'text',
    placeholder: 'Input english level',
  },
];

export default function AdditionalData() {
  return (
    <div className={classes.additionalData}>
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
              size='small'
            />
          ))
      )}
    </div>
  );
}
