import React from 'react'
import AdditionalData from '../pages/AdditionalData/AdditionalData'
import Interview from '../pages/Interview/Interview'
import PersonalData from '../pages/Personal data/PersonalData'
import classes from './PersonDetails.module.scss'

export default function PersonDetails() {
	return (
		<div className={classes.PersonDetailsWrapp}>
			<PersonalData/>
			<AdditionalData/>
			<Interview/>
		</div>
	)
}