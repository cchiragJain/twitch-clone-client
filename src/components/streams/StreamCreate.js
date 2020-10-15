import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
	renderInput({input,label}) {
		
		return (
			<div className='field'>
				<label>{label}</label>
				<input {...input} />
			</div>
		);
		/* return (
			<input onChange={formProps.input.onChange} value={formProps.input.value} />
		);
		SAME SYNTAX
		return <input {...formProps.input}/> */
	}

	// onSubmit(event) {
	// 	event.preventDefault();
	// }

	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
					<Field name='title' component={this.renderInput} label='Enter the title'/>
					<Field name='description' component={this.renderInput} label='Enter description'/>
					<button className='ui primary button'>Submit</button>
				</form>
			</div>
		)
	}
}
// this reduxForm is exactly like the connect function like helping us to call the action creators and getting the form data
export default reduxForm({
	// this is the name of the form
	form: 'streamCreate',
})(StreamCreate);
