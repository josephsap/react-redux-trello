import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardListItem from '../../components/CardListItem';
import { requestCards } from './actions';

export class CardListContainer extends Component {

  componentDidMount() {

    let listIds = {
      listId: []
    };

    //multiple lists with multiple cards
    this.props.activeBoardData.lists.forEach(function(listItem) {
      listIds.listId.push(listItem.id);
    });
    this.props.requestCards(this.props.activeBoardData.id, listIds);
  }

  renderListItems() {
    const { activeBoardData } = this.props;
    if(activeBoardData.listItems !== []) {
      return <CardListItem id={activeBoardData.id} key={activeBoardData.id} listItems={this.props.cards}name={"the Name"}></CardListItem>
    }
  }

  render() {
    return (
      <Fragment>
        { this.renderListItems() }
      </Fragment>
    );
  }

}

function mapStateToProps(state) {
  return {
    cards: state.requestCardsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCards }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);
