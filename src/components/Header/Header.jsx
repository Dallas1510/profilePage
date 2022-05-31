import React from 'react'
import logo from '../../img/logo/logo'
import classes from './Header.module.scss'

export default function Header () {
	return (
		<header className={classes.header}>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<p className='brand'>Dnieper</p>
		</header>
	)
}