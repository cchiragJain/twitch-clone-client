import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		// Fragment is kind of like an invisible component we can use to help us to render two adjacent jsx elements
		// we can shorten React.Fragment to just an empty bracket like <></> this instead of <React.Fragment></React.Fragment>
		const id = this.props.match.params.id;
		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteStream(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		}
		return (
			<p>
				Are you sure you want to delete this stream with title:
				<br />
				<strong>{this.props.stream.title}</strong>
			</p>
		);
	}

	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
	StreamDelete
);
