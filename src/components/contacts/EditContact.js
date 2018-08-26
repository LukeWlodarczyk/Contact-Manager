import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from '../../state-management';

class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	componentDidMount() {
		const {
			contact,
			history,
			match: {
				params: { id },
			},
		} = this.props;

		if (!contact) {
			return history.push({
				pathname: '/not-found',
				state: {
					id,
				},
			});
		}

		this.setState({
			...contact,
		});
	}

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

		const { errors, ...updatedContact } = this.state;

		this.props.editContact(updatedContact);

		this.setState({ name: '', email: '', phone: '', errors: {} });

		this.props.history.push('/');
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div className="card mb-3">
				<div className="card-header">Edit Contact</div>
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
							value="Update Contact"
							className="btn btn-light btn-block"
						/>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	contact: state.contacts.find(c => c.id === props.match.params.id),
});

const editContact = contact => ({
	type: 'UPDATE_CONTACT',
	payload: contact,
});

export default connect(
	mapStateToProps,
	{ editContact }
)(EditContact);
