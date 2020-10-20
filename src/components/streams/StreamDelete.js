import React from 'react';

import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
	const actions = (
		// Fragment is kind of like an invisible component we can use to help us to render two adjacent jsx elements
		// we can shorten React.Fragment to just an empty bracket like <></> this instead of <React.Fragment></React.Fragment>
		<React.Fragment>
			<button className="ui button negative">Delete</button>
			<button className="ui button">Cancel</button>
		</React.Fragment>
	);
	return (
		<div>
			StreamDelete
			<Modal
				title="Delete Stream"
				content="Are you sure you want to delete the stream?"
				actions={actions}
				onDismiss={() => history.push('/')}
			/>
		</div>
	);
};

export default StreamDelete;
