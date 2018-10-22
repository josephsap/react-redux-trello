import {
	ADD_LIST,
	ADD_LIST_SUCCESS,
	ADD_LIST_FAILED,
	ADD_LIST_CANCELLED
} from './constants';


export function addList(listName, activeBoardId) {
	console.log(listName, 'r000')
	return {
		type: ADD_LIST,
		listName,
		activeBoardId
	};
}

export function addListSuccess(listName, activeBoardId) {
	console.log(listName, 'rkk')
	return {
		type: ADD_LIST_SUCCESS,
		listName,
		activeBoardId
	};
}

export function addListFailed(listName, message) {
	return {
		type: ADD_LIST_FAILED,
		listName,
		message
	};
}

export function addListCancelled() {
	return {
		type: ADD_LIST_CANCELLED
	};
}
