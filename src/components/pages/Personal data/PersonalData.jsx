import React from 'react';
import { useFormik } from 'formik';
import Input from '../../UI/Input/Input';
import classes from './PersonalData.module.scss';

export default function PersonalData() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      birthDate: '',
      eMail: '',
      phoneNumber: '',
      homeAdress: '',
    },
  });

  return (
    <div className={classes.personalData}>
      <Input
        title='first name'
        type='text'
        placeholder='Input first name'
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <Input
        title='last name'
        type='text'
        placeholder='Input last name'
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <Input
        title='middle name'
        type='text'
        placeholder='Input middle name'
        onChange={formik.handleChange}
        value={formik.values.middleName}
      />
      <Input
        title='Birth date'
        type='date'
        placeholder='Pick date'
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />
      <Input
        title='e-mail'
        type='e-mail'
        placeholder='Input e-mail'
        onChange={formik.handleChange}
        value={formik.values.eMail}
      />
      <Input
        title='Phone number'
        type='tel'
        placeholder='Input phone number'
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      <Input
        title='home adress'
        type='text'
        placeholder='Input adress'
        onChange={formik.handleChange}
        value={formik.values.homeAdress}
      />
    </div>
  );
}
