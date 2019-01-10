import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTaskForm from '../../components/CreateTaskForm';
import { addTask, sendActiveBoardToActiveBoardReducer } from './actions';
import './styles.css';

class CreateTaskContainer extends Component {

  state = {
    showModal: false
  }

  handleModal = () => {
    console.log(this.props.activeListId, 'props')
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const modalToggle = this.state.showModal ? 'open' : '';
    return (
      <div>
        <p onClick={this.handleModal}>click to add task</p>
          <div className={`modal ${modalToggle}`}>
            <CreateTaskForm 
              { ...this.props }
              activeListId={this.props.activeListId}
              activeList={this.props.activeList}
              activeBoardId={this.props.activeBoardId}
              activeBoard={this.props.activeBoard}
            />
          </div>
      </div>
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
