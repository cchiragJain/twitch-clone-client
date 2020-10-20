import React from 'react';
// notice how we are importing ReactDOM as well here
import ReactDOM from 'react-dom';

const Modal = props => {
	// this takes in two arguments first is some jsx that we want to show on the screen
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active">
			<div className="ui standard modal visible active">I am a modal</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
