import React, { useState } from 'react';

//MaterialUI Components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// The form
import AddFlightForm from './AddFlightForm';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Styles
import { useStyles } from '../../styles/styles';

const AddFlightModal = () => {
	const classes = useStyles();

	const [state, setState] = useState({
		open: false,
	});

	const modalToggle = () => {
		setState({ open: !state.open });
	};

	return (
		<div>
			<Button
				className={classes.addButton}
				variant='contained'
				startIcon={<AddIcon />}
				onClick={modalToggle}
			>
				ADD
			</Button>
			<Dialog
				open={state.open}
				onClose={modalToggle}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Add a Flight</DialogTitle>
				<DialogContent>
					<AddFlightForm />
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AddFlightModal;
