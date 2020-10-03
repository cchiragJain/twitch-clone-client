import React from 'react';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId:
					'942249602765-89bi4cevcran1hrfnvrirugeuk6ll31f.apps.googleusercontent.com',
				scope: 'email',
			});
		});
	}

	render() {
		return <div>GoogleAuth</div>;
	}
}

export default GoogleAuth;
