import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import AppNavbar from './components/AppNavbar/AppNavbar';

// Redux stuff
import { Provider } from 'react-redux';
import store from './store';

// Imports for router
import PilotLogbook from './components/Logbook/PilotLogbook';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<MuiThemeProvider theme={muiTheme}>
					<CssBaseline>
						<AppNavbar />
						<Switch>
							<Route exact path="/" component={PilotLogbook}/>
						</Switch>
					</CssBaseline>
				</MuiThemeProvider>
			</Router>
		</Provider>
	);
};

export default App;
