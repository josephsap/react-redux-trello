import React, { Component } from 'react';
import TextInput from '../TextInput';

class CreateBoardForm extends Component {

	state = {
		boardName: ''
	}

	handleChange = (e) => {
		this.setState({
			boardName: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.boardName === '') {
			alert('enter a board name');
			return false;
		}
		this.props.addBoard(this.state.boardName);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextInput 
				  name={'Create Board Input'}
				  controlFunction={this.handleChange}
				  content={this.state.boardName}
				  placeholder={'Create a Board'}
				  title={'Create a Board'}
				  inputType={'text'}
				/>
		    	<button type="submit" value="submit" className="add">Add it</button>
		    </form>
		);
	}

}


export default CreateBoardForm;
