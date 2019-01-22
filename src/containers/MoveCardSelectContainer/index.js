import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveCard } from './actions';

class MoveCardSelect extends Component {

  state = {
    selectedListValue: ''
  }

  handleSelect = (e) => {
    let selectedListValue = parseInt(e.target.value);
    this.setState({
      selectedListValue: selectedListValue
    }, () => {
      let cardToMove = parseInt(this.props.cardToMove);
      this.props.moveCard(this.props.activeBoardId, this.state.selectedListValue, cardToMove);
    });
  }

  render() {
    return (
      <select onChange={this.handleSelect} value={this.state.selectedListValue}>
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