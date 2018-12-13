// import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import CardListItem from '../../components/CardListItem';
// import { requestCards } from './actions';

// export class CardListContainer extends Component {

//   componentDidMount() {
//     this.getCards();
//   }

//   getCards() {
//     let listIds = {
//       listId: []
//     };

//     //multiple lists with multiple cards
//     this.props.activeBoard.lists.forEach(function(listItem) {
//       listIds.listId.push(listItem.id);
//     });
//     this.props.requestCards(this.props.activeBoard.id, listIds);
//   }

  // renderListItems() {
  //   console.log(this.props, '888888');
  //   const { activeBoard } = this.props;
  //   if(activeBoard) {
  //     return <CardListItem id={activeBoard.id} key={activeBoard.id} listItems={this.props.cards}name={"the Name"}{...this.props}></CardListItem>
  //   }
  // }

//   render() {
//     return (
//       <Fragment>
//         { this.renderListItems() }
//       </Fragment>
//     );
//   }

// }

// function mapStateToProps(state) {
//   return {
//     cards: state.requestCardsReducer,
//     activeBoard: state.activeBoardReducer.activeBoard
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ requestCards }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);
