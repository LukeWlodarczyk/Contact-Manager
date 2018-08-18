import React, { Component } from 'react';
import Context from './context';

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

class Provider extends Component {
	state = {};

	dispatch = action => this.setState(state => reducer(state, action));

	render() {
		return (
			<Context.Provider value={{ ...this.state, dispatch: this.dispatch }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Provider;