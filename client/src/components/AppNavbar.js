import React, { useState, useEffect, Fragment } from 'react';
import navStyles from '../styles/NavStyles';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
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

	// Button to show if not logged in
	const guestLinks = (
		<Fragment>
			<RegisterModal />
			<LoginModal />
		</Fragment>
	);

	// TODO: Add the buttons for logged-in users
	const authLinks = <Fragment></Fragment>;

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<ToolBar variant='dense' className={classes.menuBar}>
					{/* Fade the menu in when it's displayed */}
					<Fade in={screenWidth < 600} timout={3000}>
						{/* Box with display prop to show and hide the mobile menu button */}
						<Box display={{ xs: 'flex', sm: 'none' }}>
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'
							>
								<MenuIcon />
							</IconButton>
						</Box>
					</Fade>
					<Typography variant='h6' className={classes.title}>
						React Logbook
					</Typography>
					{/* Are we logged in? If not, only show login and register buttons 
						TODO: add buttons for logged-in users
					*/}
					{auth ? null : guestLinks}
				</ToolBar>
			</AppBar>
		</div>
	);
};

export default AppNavbar;
