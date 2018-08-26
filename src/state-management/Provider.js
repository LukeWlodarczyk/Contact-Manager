import React, { Component } from 'react';
import Context from './context';

import contacts from '../data/contacts';

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.payload
				),
			};
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [action.payload, ...state.contacts],
			};
		case 'UPDATE_CONTACT':
			return {
				...state,
				contacts: state.contacts.map(
					contact =>
						contact.id === action.payload.id
							? (contact = action.payload)
							: contact
				),
			};
		default:
			return state;
	}
};

class Provider extends Component {
	state = {
		contacts: [...contacts],
	};

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
