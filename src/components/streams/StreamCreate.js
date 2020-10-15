import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}
	// formated renderInput to a arrow function to solve the this issue since it will be called inside from the field component the this keyword will have a different value and will not work for renderError
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{/* <div>{meta.error}	</div> */}
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}
					className="ui form error"
				>
					<Field
						name="title"
						component={this.renderInput}
						label="Enter title"
					/>
					<Field
						name="description"
						component={this.renderInput}
						label="Enter description"
					/>
					<button className="ui primary button">Submit</button>
				</form>
			</div>
		);
	}
}

const validate = formValue => {
	// these errors will be somehow magically(due to redux form) be there inside the component part in the Field component
	const errors = {};
	if (!formValue.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValue.description) {
		errors.description = 'You must enter a description';
	}
	return errors;
};

// this reduxForm is exactly like the connect function like helping us to call the action creators and getting the form data
export default reduxForm({
	// this is the name of the form
	form: 'streamCreate',
	validate: validate,
})(StreamCreate);
