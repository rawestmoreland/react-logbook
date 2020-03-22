import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const RegisterModal = () => {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Button color='inherit' onClick={toggle}>
				Register
			</Button>
			<Dialog
				open={open}
				onClose={toggle}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle>Login</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Fill out the form to register your new account
					</DialogContentText>
					<TextField
						name='email'
						type='email'
						label='Email address'
					/>
					<TextField
						name='password'
						type='password'
						label='Password'
					/>
				</DialogContent>
				<DialogActions>
					<Button>Cancel</Button>
					<Button>Register</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default RegisterModal;
