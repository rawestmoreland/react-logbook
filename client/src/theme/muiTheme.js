import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			main: '#142850',
			contrastText: '#fff',
		},
		textPrimary: {
			main: 'rgba(0,0,0,0.54)'
		}
	},
});

export default theme;
