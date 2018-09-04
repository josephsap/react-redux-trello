/*
 *
 * Board container - shows all of our boards
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';
import { requestBoards } from './actions';
import { selectBoard } from '../SingleBoardContainer/actions';


export class BoardContainer extends Component {

  componentDidMount() {
    this.props.requestBoards();
    console.log(this.props, '9999')
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}


function mapStateToProps(state) {
  return { boards: state.boardReducer.boards };
};

function mapDispatchToProps(dispatch) {
  return {
    // takes a boardName param. when called, dispatches 
    // the result of requestBoards action creator.
    requestBoards: () => dispatch(requestBoards()),
    selectBoard: (board) => dispatch(selectBoard(board))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);