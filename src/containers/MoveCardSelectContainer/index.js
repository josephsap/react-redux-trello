import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveCard } from './actions';

class MoveCardSelect extends Component {

  state = {
    selectedListValue: ''
  }

  handleSelect = (e) => {
    console.log(e.target.value, 'hi')
    let selectedListValue = parseInt(e.target.value);
    this.setState({
      selectedListValue: selectedListValue
    }, () => {
      let cardToMove = parseInt(this.props.cardToMove);
      console.log(this.props.activeBoardId, this.state.selectedListValue, cardToMove, '000000')
      this.props.moveCard(this.props.activeBoardId, this.state.selectedListValue, cardToMove);
    });
    
    // this.props.activeBoardId, list to move to id = e.target.value,
    // then in api, find the card and update its listID
    // then re-render the view by updating the active board reducer
  }

  handleClick = (e) => {
    console.log(e.target.value, 'handle click')
  }

  render() {
    // console.log(this.props, 'move it')
    return (
      <select onClick={this.handleClick} onChange={this.handleSelect} value={this.state.selectedListValue}>
        {this.props.activeBoard.map((listItem) => {
          return (
            <option key={listItem.id} id={listItem.id} value={listItem.id}>
              {listItem.listName}
            </option>
          )
        })}
      </select>
    );
  }

};


function mapDispatchToProps(dispatch) {
  return {
    moveCard: bindActionCreators(moveCard, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(MoveCardSelect);