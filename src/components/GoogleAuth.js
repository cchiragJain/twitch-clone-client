import React from 'react';

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };

	componentDidMount() {
		// loading the library
		window.gapi.load('client:auth2', () => {
			// initializing the library
			window.gapi.client
				.init({
					clientId:
						'942249602765-89bi4cevcran1hrfnvrirugeuk6ll31f.apps.googleusercontent.com',
					scope: 'email',
				}) // we are not making use of a callback here since init will return a promise
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
				});
		});
	}

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>don't know</div>;
		} else if (this.state.isSignedIn) {
			return <div>signed in</div>;
		} else {
			return <div>not signed in</div>;
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
