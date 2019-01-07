import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTaskForm from '../../components/CreateTaskForm';
import { addTask, sendActiveBoardToActiveBoardReducer } from './actions';

class CreateTaskContainer extends Component {

  render() {
    return (
      <Fragment>
        <CreateTaskForm 
          { ...this.props }
          activeListId={this.props.activeListId}
          activeList={this.props.activeList}
          activeBoardId={this.props.activeBoardId}
          activeBoard={this.props.activeBoard}
        />
      </Fragment>
    );
  }

}


function mapStateToProps(state) {
  return {
    activeBoardId: parseInt(state.createTaskReducer.activeBoardId),
    activeBoard: state.activeBoardReducer.activeBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    sendActiveBoardToActiveBoardReducer: bindActionCreators(sendActiveBoardToActiveBoardReducer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer);
