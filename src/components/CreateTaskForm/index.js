import React, { Component } from 'react';
import TextInput from '../TextInput';

class CreateTaskForm extends Component {

  state = {
    cardName: '',
    taskDescription: ''
  }

  handleChange = (e) => {
    this.setState({
      cardName: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.cardName === '') {
      alert('Enter a task name');
      return false;
    }
    this.props.addTask(this.state.cardName, this.props.activeBoard, this.props.activeBoardId, this.props.activeListId, this.props.activeList);
    this.props.sendActiveBoardToActiveBoardReducer(this.props.activeBoard);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Create a new Task</label>
        <TextInput 
          name={'Create Task Name Input'}
          controlFunction={this.handleChange}
          content={this.state.cardName}
          placeholder={'Create a Task'}
          title={'Create a Task'}
          inputType={'text'}
        />
        <button type="submit" value="submit" className="add">Add a Task</button>
      </form>
    );
  }

}


export default CreateTaskForm;
