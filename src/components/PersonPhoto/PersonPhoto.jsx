import React from 'react'
import Button from '../UI/Button/Button'
import Photo from '../UI/Photo/Photo'
import classes from './PersonPhoto.module.scss'

export default function PersonPhoto() {
	return (
		<div className={classes.personPhoto}>
			<Photo/>
			<Button/>
		</div>
	)
}