import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'942249602765-89bi4cevcran1hrfnvrirugeuk6ll31f.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					// remember how this runs at initialisation
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	// we don't have to get access to the login status by using the auth instance as this callback gets called with that
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return <div className="ui active medium inline loader"></div>;
		} else if (this.props.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="ui red google button" onClick={this.onSignInClick}>
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

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
