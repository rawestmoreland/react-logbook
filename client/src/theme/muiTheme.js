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
	},
});

export default theme;
