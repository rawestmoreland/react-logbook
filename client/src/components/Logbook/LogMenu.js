import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from '../../styles/styles';

const LogMenu = () => {
	const classes = useStyles();

	return (
		<div className={classes.logMenuContainer}>
			<Button
				className={classes.addButton}
				variant='contained'
				color='default'
				startIcon={<AddIcon />}
			>
				Add
			</Button>
		</div>
	);
};

export default LogMenu;
