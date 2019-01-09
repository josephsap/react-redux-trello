import React, { Component } from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextInput/textarea';

class CreateTaskForm extends Component {

  state = {
    card: {
      cardName: '',
      cardDescription: ''
    }
  }

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      card: { 
        cardName: e.target.value,
        cardDescription: prevState.card.cardDescription
      }
    }));
  }

  handleDescriptionChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      card: {
        cardName: prevState.card.cardName,
        cardDescription: e.target.value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.card.name === '') {
      alert('Enter a task name');
      return false;
    }
    this.props.addTask(this.state.card, this.props.activeBoard, this.props.activeBoardId, this.props.activeListId, this.props.activeList);
    this.setState({
      card: {
        cardName: '',
        cardDescription: ''
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Create a new Task</label>
        <TextInput 
          name={'Create Task Name Input'}
          controlFunction={this.handleChange}
          content={this.state.card.cardName || ''}
          placeholder={'Create a Task'}
          title={'Create a Task'}
          inputType={'text'}
        />
        <TextArea
          name={'Task Description'}
          controlFunction={this.handleDescriptionChange}
          content={this.state.card.cardDescription || ''}
          placeholder={'Enter a description'}
          title={'Enter a description'}
          rows={4}
          cols={40}
          inputType={'textarea'}
        />
        <button type="submit" value="submit" className="add">Add a Task</button>
      </form>
    );
  }

}


export default CreateTaskForm;
