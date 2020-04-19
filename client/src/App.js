import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import AppNavbar from './components/AppNavbar/AppNavbar';

const App = () => {
	return (
		<Router>
			<MuiThemeProvider theme={muiTheme}>
				<CssBaseline>
					<AppNavbar />
				</CssBaseline>
			</MuiThemeProvider>
		</Router>
	);
};

export default App;
