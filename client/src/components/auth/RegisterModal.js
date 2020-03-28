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

const RegisterModal = () => {
	const classes = navStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [matchPass, setMatchPass] = useState('');
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
				<Grid container>
					<Grid item xs={6}>
						<DialogTitle>Register</DialogTitle>
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
						Fill out the form to register your new account
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
								setEmail(e.target.value);
							}}
						/>
					</Box>
					<Box mt={1}>
						<TextField
							className={classes.modalText}
							name='matchPass'
							type='matchPass'
							label='Re-enter password'
							value={matchPass}
							onChange={e => {
								setEmail(e.target.value);
							}}
						/>
					</Box>
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
