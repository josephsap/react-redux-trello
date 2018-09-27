import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardListItem from '../../components/CardListItem';
import { requestCards } from './actions';

export class CardListContainer extends Component {

  componentDidMount() {

    let listIds = {
      listId: []
    };

    // multiple lists with multiple cards
    this.props.activeBoardData.data.forEach(function(listItem) {
      listIds.listId.push(listItem.id);
    });
    this.props.requestCards(this.props.activeBoardData.id, listIds);
  }

  renderListItems() {
    const { activeBoardData } = this.props;
    if(activeBoardData) {
      return <CardListItem id={activeBoardData.id} key={activeBoardData.id} name={"the Name"} cards={this.props.cards}>{activeBoardData}</CardListItem>
    }
  }

  render() {
    return (
      <div>
        { this.renderListItems() }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    cards: state.requestCardsReducer.cards
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCards }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);
