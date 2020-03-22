import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
				<DialogTitle id='form-dialog-title'>Login</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Enter your email and password to login
					</DialogContentText>
					<TextField
						m={2}
						name='email'
						type='email'
						label='Email address'
						value={email}
						onChange={e => {
							setEmail(e.target.value);
							console.log(email);
						}}
					/>
					<TextField
						name='password'
						type='password'
						label='Password'
						value={password}
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>
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
