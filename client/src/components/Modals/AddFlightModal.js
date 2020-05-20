import React from 'react';

//MaterialUI Components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Styles
import { useStyles } from '../../styles/styles';

const AddFlightModal = () => {
	const classes = useStyles();

	return (
		<div>
			<Button
				className={classes.addButton}
				variant='contained'
				startIcon={<AddIcon />}
			>
				ADD
			</Button>
		</div>
	);
};

export default AddFlightModal;
