import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from './state-management';

import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import NotFound from './components/layout/NotFound';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/" component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
