import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdditionalData from '../pages/AdditionalData/AdditionalData'
import Interview from '../pages/Interview/Interview'
import PersonalData from '../pages/Personal data/PersonalData'
import classes from './PersonDetails.module.scss'

export default function PersonDetails() {
	return (
		<div className={classes.PersonDetailsWrapp}>
			<Routes>
				<Route path='/personal-data' element={<PersonalData/>}/>
				<Route path='/additional-data' element={<AdditionalData/>}/>
				<Route path='/interview' element={<Interview/>}/>
			</Routes>
		</div>
	)
}