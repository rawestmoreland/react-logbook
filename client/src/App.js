import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { customTheme } from './theme/muiTheme';
import AppNavbar from './components/AppNavbar/AppNavbar';
import { useStyles } from './styles/styles';

// Redux stuff
import { Provider } from 'react-redux';
import store from './store';

// Imports for router
import PilotLogbook from './components/Logbook/PilotLogbook';

const App = () => {
	const classes = useStyles();
	const theme = customTheme;

	return (
		<Provider store={store}>
			<Router>
				<MuiThemeProvider theme={theme}>
					<CssBaseline>
						<div className={classes.root}>
							{/* The top toolbar and the responsive nav drawer */}
							<AppNavbar />
							<main className={classes.content}>
								{/* We need the main content to appear below the toolbar */}
								<div className={classes.toolbar} />
								{/* Router for navigating the main content */}
								<Switch>
									<Route
										exact
										path='/'
										component={PilotLogbook}
									/>
								</Switch>
							</main>
						</div>
					</CssBaseline>
				</MuiThemeProvider>
			</Router>
		</Provider>
	);
};

export default App;
