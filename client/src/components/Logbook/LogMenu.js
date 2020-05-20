import React from 'react';
import { useStyles } from '../../styles/styles';
import AddFlightModal from '../Modals/AddFlightModal';

const LogMenu = () => {
	const classes = useStyles();

	return (
		<div className={classes.logMenuContainer}>
			<AddFlightModal />
		</div>
	);
};

export default LogMenu;
