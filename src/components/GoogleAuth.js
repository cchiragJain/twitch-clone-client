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

					// get returns a boolean value of whether the user is signed in or not
					// for initial when the app loads
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });

					// listen will listen to changes on the isSignedIn object and run a callback accordingly
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		// changing the state as soon as this callback gets called
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOut}>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="ui red google button" onClick={this.onSignIn}>
					<i className="google icon" />
					Sign In With Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
