import React from 'react';
import { CssBaseline } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import AppNavbar from './components/AppNavbar/AppNavbar';

const App = () => {
	return (
		<MuiThemeProvider theme={muiTheme}>
			<CssBaseline>
				<AppNavbar />
			</CssBaseline>
		</MuiThemeProvider>
	);
};

export default App;
