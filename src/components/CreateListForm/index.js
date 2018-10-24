import React, { Component } from 'react';
import TextInput from '../TextInput';

class CreateListForm extends Component {

  state = {
    listName: ''
  }

  handleChange = (e) => {
    this.setState({
      listName: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.listName === '') {
      alert('Enter a list name');
      return false;
    }
    this.props.addList(this.state.listName, this.props.activeBoardId);
  }

  render() {
    console.log(this.props, '-0')
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Create a new list</label>
        <TextInput 
          name={'Create List Input'}
          controlFunction={this.handleChange}
          content={this.state.listName}
          placeholder={'Create a List'}
          title={'Create a List'}
          inputType={'text'}
        />
          <button type="submit" value="submit" className="add">Add a List</button>
        </form>
    );
  }

}


export default CreateListForm;