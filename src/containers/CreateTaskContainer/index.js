import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTaskForm from '../../components/CreateTaskForm';
import { addTask } from './actions';

class CreateTaskContainer extends Component {

  render() {
    return (
      <Fragment>
        <CreateTaskForm { ...this.props } />
      </Fragment>
    );
  }


  function mapStateToProps(state) {
    return {
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      addTask: bindActionCreators(addTask, dispatch)
    };
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer);
