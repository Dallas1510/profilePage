import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './Interview.module.scss'

const inputList = [
	{
    id: 1,
    title: 'interview date',
    type: 'date',
    placeholder: 'Pick date',
  },
  {
    id: 2,
    title: 'conclusions',
    type: 'text',
    placeholder: 'Input conclusions',
  },
  {
    id: 3,
    title: 'interview topics',
    type: 'text',
    placeholder: 'Input topics',
  },
]

export default function Interview() {
	return (
		<div className={classes.interview}>
			{inputList.map((input) => (
        <Input
          key={input.id}
          title={input.title}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
		</div>
	)
}