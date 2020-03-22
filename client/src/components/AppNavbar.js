import React, { useState, useEffect, Fragment } from 'react';
import navStyles from '../styles/NavStyles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';

const AppNavbar = () => {
	const classes = navStyles();
	const [auth, setAuth] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	useEffect(() => {
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	const updateWidth = () => {
		setScreenWidth(window.innerWidth);
	};

	const handleMenu = () => {
		console.log('butts');
	};

	const handleLogin = () => {
		console.log('login Modal');
	};

	const guestLinks = (
		<Fragment>
			<RegisterModal />
			<LoginModal />
		</Fragment>
	);

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<ToolBar variant='dense' className={classes.menuBar}>
					{screenWidth < 600 ? (
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
					) : null}
					<Typography variant='h6' className={classes.title}>
						React Logbook
					</Typography>
					{auth ? null : guestLinks}
				</ToolBar>
			</AppBar>
		</div>
	);
};

export default AppNavbar;
