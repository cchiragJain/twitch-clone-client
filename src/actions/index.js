import streams from '../apis/streams';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
} from './types';

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

// most of the action creators that make api requests of any kind have the same kind of syntax as these ones and also the middleware is applied to them in main index.js file

// post posts the data to the api
export const createStream = formValues => async dispatch => {
	const response = await streams.post('/streams', formValues);
	dispatch({
		type: CREATE_STREAM,
		payload: response.data,
	});
};

// get is how we get the data
export const fetchStreams = () => async dispatch => {
	const response = await streams.get('/streams');
	dispatch({
		type: FETCH_STREAMS,
		payload: response.data,
	});
};

export const fetchStream = id => async dispatch => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({
		type: FETCH_STREAM,
		payload: response.data,
	});
};

// put is used to updata data on a server
// we are putting the new formValues here to the existing id
export const editStream = (id, formValues) => async dispatch => {
	const response = await streams.put(`/streams/${id}`, formValues);
	dispatch({
		type: EDIT_STREAM,
		payload: response.data,
	});
};

// delete is used to delete data from a server
// there is not going to be any response in this case
export const deleteStream = id => async dispatch => {
	await streams.delete(`/streams/${id}`);
	dispatch({
		type: DELETE_STREAM,
		payload: id,
	});
};
