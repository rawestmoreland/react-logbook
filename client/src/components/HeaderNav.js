import React, { useState, useEffect } from 'react';
import navStyles from '../styles/NavStyles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const HeaderNav = () => {
	const classes = navStyles();
	const [auth, setAuth] = useState(true);
	const [isDesktop, setIsDesktop] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	useEffect(() => {
		window.addEventListener('resize', console.log('butts'));
	}, []);

	const handleMenu = () => {
		console.log('butts');
	};

	const toggle = () => {
		console.log('login Modal');
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<ToolBar variant='dense' className={classes.menuBar}>
					{!isDesktop ? (
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
					{auth ? (
						<div>
							<IconButton
								aria-label='account of user'
								aria-controls='menu-appbar'
								onClick={handleMenu}
								color='inherit'
							>
								<AccountCircle />
							</IconButton>
						</div>
					) : (
						<div>
							<Button
								aria-label='login'
								aria-controls='menu-appbar'
								onClick={toggle}
								color='inherit'
							>
								Login
							</Button>
						</div>
					)}
				</ToolBar>
			</AppBar>
		</div>
	);
};

export default HeaderNav;
