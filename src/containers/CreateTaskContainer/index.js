import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTaskForm from '../../components/CreateTaskForm';
import { addTask } from './actions';

class CreateTaskContainer extends Component {

  render() {
    return (
      <Fragment>
        <CreateTaskForm 
          { ...this.props }
          activeListId={this.props.activeListId}
          activeBoardId={this.props.activeBoardId}
        />
      </Fragment>
    );
  }

}


function mapStateToProps(state) {
  return {
    activeBoardId: state.createTaskReducer.activeBoardId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: bindActionCreators(addTask, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer);
