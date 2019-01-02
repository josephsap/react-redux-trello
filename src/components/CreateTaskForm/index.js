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
    //let activeListId = this.props.activeBoard.id;
    //console.log(, 'list id')
    // this.props.activeListId
    console.log(this.props, 'props')
    this.props.addTask(this.state.cardName, this.props.activeBoardId, this.props.activeListId);
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
