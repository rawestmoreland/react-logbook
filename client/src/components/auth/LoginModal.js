import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import navStyles from '../../styles/NavStyles';

const LoginModal = () => {
	const classes = navStyles();
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const toggle = () => {
		setOpen(!open);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submit');
		setOpen(!open);
	};

	return (
		<div>
			<Button color='inherit' onClick={toggle}>
				Login
			</Button>
			<Dialog
				open={open}
				onClose={toggle}
				aria-labelledby='form-dialog-title'
			>
				<Grid container>
					<Grid item xs={6}>
						<DialogTitle>Login</DialogTitle>
					</Grid>
					<Grid item xs={6}>
						<Box display="flex" justifyContent="flex-end">
							<IconButton onClick={toggle}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				<DialogContent>
					<DialogContentText>
						Enter your email and password to login
					</DialogContentText>
					<Box mt={1}>
						<TextField
							className={classes.modalText}
							name='email'
							type='email'
							label='Email address'
							value={email}
							onChange={e => {
								setEmail(e.target.value);
								console.log(email);
							}}
						/>
					</Box>
					<Box mt={1}>
						<TextField
							className={classes.modalText}
							name='password'
							type='password'
							label='Password'
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancel</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default LoginModal;
