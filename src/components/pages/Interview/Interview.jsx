import { useFormik } from 'formik';
import React from 'react';
import Input from '../../UI/Input/Input';
import Textarea from '../../UI/Input/Textarea';
import classes from './Interview.module.scss';

export default function Interview() {
  const formik = useFormik({
    initialValues: {
      interviewDate: '',
      interviewTopics: '',
      conclusions: '',
    },
  });

  return (
    <div className={classes.interview}>
      <div>
        <Input
          title='interview date'
          type='date'
          placeholder='Pick date'
          onChange={formik.handleChange}
          value={formik.values.interviewDate}
        />
        <Input
          title='interview topics'
          type='text'
          placeholder='Input topics'
          onChange={formik.handleChange}
          value={formik.values.interviewTopics}
        />
      </div>
      <Textarea
        title='conclusions'
        placeholder='Input conclusions'
        size='big'
        onChange={formik.handleChange}
        value={formik.values.conclusions}
      />
    </div>
  );
}
