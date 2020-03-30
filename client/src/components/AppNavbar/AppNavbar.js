import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Hidden, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

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
	}

	const drawer = (
		<div className="classes.toolbar">
			Nav Drawer
		</div>
	);

	return (
		<div className={classes.root}>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						React Log
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className="classes.drawer" aria-label="menu items"> 
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.directions === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true,
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
						paper: classes.drawerPaper,
						}}
						variant="permanent"
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