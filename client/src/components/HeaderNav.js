import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const HeaderNav = () => {
	const [state, setState] = useState({ isOpen: false })

	const navOpen = e => {
		setState({ isOpen: !state.isOpen })
	}
	return (
		<AppBar position='static'>
			<ToolBar>
				<IconButton>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6'>News</Typography>
				<Button color='inherit'>Login</Button>
			</ToolBar>
		</AppBar>
	)
}

export default HeaderNav
