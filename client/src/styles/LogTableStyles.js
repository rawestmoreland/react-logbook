import { makeStyles } from '@material-ui/core/styles';

export const logTableStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: '85vh',
	},
	topHeader: {
		height: 80,
	},
	topHeaderCell: {
		backgroundColor: 'white',
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	gridLoaderContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '85vh',
	},
}));
