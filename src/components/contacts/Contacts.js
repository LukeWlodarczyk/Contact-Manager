import React from 'react';
import Contact from './Contact';
import { connect } from '../../state-management';

const Contacts = ({ contacts, deleteContact }) => (
	<React.Fragment>
		<h1 className="display-4 mb-2">
			<span className="text-danger">Contact List</span>
		</h1>
		{contacts.map(contact => (
			<Contact
				key={contact.id}
				contact={contact}
				deleteContact={deleteContact}
			/>
		))}
	</React.Fragment>
);

const mapStateToProps = state => ({ contacts: state.contacts });

const deleteContact = id => ({ type: 'DELETE_CONTACT', payload: id });

export default connect(
	mapStateToProps,
	{ deleteContact }
)(Contacts);
