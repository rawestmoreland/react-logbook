import React, { useState } from 'react'
import navStyles from './NavStyles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const HeaderNav = () => {
	const classes = navStyles()
	const [auth, setAuth] = useState(true)
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleMenu = () => {
		console.log("butts")
	}

	return (
		<div className={classes.root}>
		<AppBar position='static'>
			<ToolBar variant="dense" className={classes.menuBar}>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' className={classes.title}>React Logbook</Typography>
				{auth ? (
					<div>
						<IconButton
							aria-label="account of user"
							aria-controls="menu-appbar"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				) : null}
			</ToolBar>
		</AppBar>
		</div>
	)
}

export default HeaderNav
