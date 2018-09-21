import {
	ADD_BOARD,
	ADD_BOARD_SUCCESS,
	ADD_BOARD_FAILED,
	ADD_BOARD_CANCELLED
} from './constants';


export function addBoard(boardName) {
	return {
		type: ADD_BOARD,
		boardName
	};
}

export function addBoardSuccess(boardName) {
	return {
		type: ADD_BOARD_SUCCESS,
		boardName
	};
}

export function addBoardFailed(boardName, message) {
	return {
		type: ADD_BOARD_FAILED,
		boardName,
		message
	};
}

export function addBoardCancelled() {
	return {
		type: ADD_BOARD_CANCELLED
	};
}
