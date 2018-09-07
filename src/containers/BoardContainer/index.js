/*
 *
 * Board container - shows all of our boards
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';
import { requestBoards } from './actions';


export class BoardContainer extends Component {

  componentDidMount() {
    this.props.requestBoards();
  }

  render() {
    return (
      <div>board container, should render single board</div>
    );
  }
}


function mapStateToProps(state) {
  return { 
    boards: state.boardReducer.boards
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // takes a boardName param. when called, dispatches 
    // the result of requestBoards action creator.
    requestBoards: () => dispatch(requestBoards())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);