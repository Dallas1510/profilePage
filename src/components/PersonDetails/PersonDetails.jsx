import React from 'react'
import PersonalData from '../pages/Personal data/PersonalData'
import classes from './PersonDetails.module.scss'

export default function PersonDetails() {
	return (
		<div className={classes.PersonDetailsWrapp}>
			<PersonalData/>
		</div>
	)
}