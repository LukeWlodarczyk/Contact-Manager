import React, { Component } from 'react';
import uuid from 'uuid/v1';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from '../../state-management';

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.name === '') {
			this.setState({ errors: { name: 'Name is required' } });
			return;
		}
		if (this.state.email === '') {
			this.setState({ errors: { email: 'Email is required' } });
			return;
		}
		if (this.state.phone === '') {
			this.setState({ errors: { phone: 'Email is required' } });
			return;
		}

		const { errors, ...newContact } = this.state;

		this.props.addContact({ ...newContact, id: uuid() });

		this.setState({ name: '', email: '', phone: '', errors: {} });

		this.props.history.push('/');
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.handleSubmit}>
						<TextInputGroup
							label="Name"
							name="name"
							placeholder="Full Name"
							value={name}
							onChange={this.onChange}
							error={errors.name}
						/>
						<TextInputGroup
							label="Email"
							name="email"
							type="email"
							placeholder="Email"
							value={email}
							onChange={this.onChange}
							error={errors.email}
						/>
						<TextInputGroup
							label="Phone"
							name="phone"
							placeholder="Phone Number"
							value={phone}
							onChange={this.onChange}
							error={errors.phone}
						/>
						<input
							type="submit"
							value="Add Contact"
							className="btn btn-light btn-block"
						/>
					</form>
				</div>
			</div>
		);
	}
}

const addContact = contact => ({ type: 'ADD_CONTACT', payload: contact });

export default connect(
	null,
	{ addContact }
)(AddContact);
