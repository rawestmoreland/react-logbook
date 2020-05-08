import { createMuiTheme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
	overrides: {
		MuiTableSortLabel: {
			root: {
				'&:hover': {
					color: 'grey',
				},
				'&$active': {
					color: 'grey',
					'&& $icon': {
						color: 'grey',
					},
				},
			},
		},
	},
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			main: '#142850',
			contrastText: '#fff',
		},
		textPrimary: {
			main: 'rgba(0,0,0,0.54)',
		},
	},
});
