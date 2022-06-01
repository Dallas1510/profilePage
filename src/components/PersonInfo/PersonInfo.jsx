import React from 'react'
import classes from './PersonInfo.module.scss'
import PersonDetails from '../PersonDetails/PersonDetails'
import PersonPhoto from '../PersonPhoto/PersonPhoto'

export default function PersonInfo() {
	return (
		<div className={classes.person}>
			<PersonPhoto/>
			<PersonDetails/>
		</div>
	)
}