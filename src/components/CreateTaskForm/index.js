import React, { Component } from 'react';
import TextInput from '../TextInput';

class CreateTaskForm extends Component {

  state = {
    taskName: '',
    taskDescription: ''
  }

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.taskName === '') {
      alert('Enter a task name');
      return false;
    }
    //let activeListId = this.props.activeBoard.id;
    //console.log(activeListId, 'list id')
    // this.props.activeListId
    //this.props.addTask(this.state.taskName, this.state.taskDescription, this.props.activeBoardId);
  }

  render() {
    console.log(this.props.activeListId, 'props')
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Create a new Task</label>
        <TextInput 
          name={'Create Task Name Input'}
          controlFunction={this.handleChange}
          content={this.state.taskName}
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
