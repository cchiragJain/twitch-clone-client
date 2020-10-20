import React from 'react';
import ReactDOM from 'react-dom';

import history from '../history';

const Modal = props => {
	// this takes in two arguments first is some jsx that we want to show on the screen
	return ReactDOM.createPortal(
		<div
			onClick={() => history.push('/')}
			className="ui dimmer modals visible active"
		>
			{/* we added stopPropagation to solve event bubbling issues */}
			<div
				onClick={event => event.stopPropagation()}
				className="ui standard modal visible active"
			>
				<div className="header">Delete Stream</div>
				<div className="content">
					Are you sure you want to delete the stream?
				</div>
				<div className="actions">
					<button className="ui primary button">Delete</button>
					<button className="ui button">Cancel</button>
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
