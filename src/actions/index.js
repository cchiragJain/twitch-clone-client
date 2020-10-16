import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAMS } from './types';

export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createStream = formValues => async dispatch => {
	const response = await streams.post('/streams', formValues);
	dispatch({
		type: CREATE_STREAMS,
		payload: response.data,
	});
};
