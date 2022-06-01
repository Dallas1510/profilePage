import React from 'react'
import photo from '../../../img/ProfilePhoto/photo.png'
import classes from './Photo.module.scss'

export default function Photo() {
	return (
		<div className={classes.photo}>
			<img src={photo} alt="Person" />
		</div>
	)
}