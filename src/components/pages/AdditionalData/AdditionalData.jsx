import React from 'react';
import { useFormik } from 'formik';
import classes from './AdditionalData.module.scss';
import Textarea from '../../UI/Input/Textarea';

export default function AdditionalData() {
  const formik = useFormik({
    initialValues: {
      education: '',
      jobExperience: '',
      skills: '',
      englishLevel: '',
    },
  });

  return (
    <div className={classes.additionalData}>
      <Textarea
        title='education'
        placeholder='Input education'
        size='small'
        onChange={formik.handleChange}
        value={formik.values.education}
      />
      <Textarea
        title='job experience'
        placeholder='Input job experience'
        size='small'
        onChange={formik.handleChange}
        value={formik.values.jobExperience}
      />
      <Textarea
        title='skills (stacks)'
        placeholder='Input skills'
        size='small'
        onChange={formik.handleChange}
        value={formik.values.skills}
      />
      <Textarea
        title='english level'
        placeholder='Input english level'
        size='small'
        onChange={formik.handleChange}
        value={formik.values.englishLevel}
      />
    </div>
  );
}
