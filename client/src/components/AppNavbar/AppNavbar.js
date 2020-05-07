import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../../styles/styles';
import { Route, Switch } from 'react-router-dom';
import { customTheme } from '../../theme/muiTheme';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuComponent from './MenuComponent';

const theme = customTheme;

const AppNavbar = (props) => {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// Drawer menu names
	const menus = ['Flights', 'Aircraft', 'Analysis'];

	const drawer = (
		<div>
			<List>
				{
					// Map through the menus and create a MenuComponent for each
					menus.map((text, index) => (
						<MenuComponent key={text} index={index} text={text} />
					))
				}
			</List>
		</div>
	);

	return (
		<>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						Logbook
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='menu items'>
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.directions === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true,
						}}
					>
						<IconButton
							onClick={handleDrawerToggle}
							className={classes.closeMenuButton}
						>
							<CloseIcon />
						</IconButton>
						{drawer}
					</Drawer>
				</Hidden>

				<Hidden xsDown implementation='css'>
					<Drawer
						className={classes.drawer}
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
					>
						<div className={classes.toolbar} />
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</>
	);
};

export default AppNavbar;
