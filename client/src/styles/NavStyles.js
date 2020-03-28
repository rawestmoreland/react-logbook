import { makeStyles } from '@material-ui/core/styles';
import variables from './variables';

const { color } = variables;

const navStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		display: 'none',
		marginRight: theme.spacing(2),
		transition: 'display 0.5s'
	},
	show: {
		display: 'flex'
	},
	menuBar: {
		backgroundColor: color.darkBlue
	},
	title: {
		flexGrow: 1
	},
	modalText: {
		width: '100%'
	}
}));

export default navStyles;
