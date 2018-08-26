import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Contact extends Component {
	state = {
		showContactInfo: false,
	};

	onShowClick = e => {
		this.setState({ showContactInfo: !this.state.showContactInfo });
	};

	onDeleteClick = () => {
		this.props.deleteContact(this.props.contact.id);
	};

	render() {
		const { name, email, phone, id } = this.props.contact;
		const { showContactInfo } = this.state;

		return (
			<div className="card card-body mb-3">
				<h4>
					{name}{' '}
					<i
						onClick={this.onShowClick}
						className="fas fa-sort-down"
						style={{ cursor: 'pointer' }}
					/>
					<i
						className="fas fa-times"
						style={{ cursor: 'pointer', float: 'right', color: 'red' }}
						onClick={this.onDeleteClick}
					/>
					<Link to={`contact/${id}/edit`}>
						<i
							className="fas fa-pencil-alt"
							style={{
								cursor: 'pointer',
								float: 'right',
								color: 'black',
								marginRight: '1rem',
							}}
						/>
					</Link>
				</h4>
				{showContactInfo && (
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
				)}
			</div>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteContact: PropTypes.func.isRequired,
};

export default Contact;
