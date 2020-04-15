import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import muiTheme from '../../theme/muiTheme';
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
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuComponent from './MenuComponent';

const drawerWidth = 240;
const theme = muiTheme;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const AppNavbar = (props) => {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// Drawer menu names
	const menus = ['Flights', 'Aircraft', 'Analysis'];

	const drawer = (
		<div>
			<Box className={classes.toolbar} />
			<Divider />
			<List>
				{
					// Map through the menus and create a MenuComponent for each
					menus.map(
						(text, index) => (
							<MenuComponent key={text} index={index} text={text} />
						)
					)
				}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
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
						HoursAware
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className='classes.drawer' aria-label='menu items'>
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
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
};

export default AppNavbar;
