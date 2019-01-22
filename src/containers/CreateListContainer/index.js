import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardListItem from '../../components/CardListItem';
import CreateListForm from '../../components/CreateListForm';
import { addList } from '../SingleBoardContainer/actions';
import { deleteCard } from '../CreateTaskContainer/actions';
import MoveCardSelect from '../../components/MoveCardSelect';


class CreateListContainer extends Component {

  state = {
    modalOpen: false
  }

  renderListItems() {
    const { activeBoard, activeBoardId } = this.props;
    if(activeBoard) {
      return (
        <CardListItem 
          activeBoard={activeBoard}
          activeBoardId={activeBoardId}
          controlFunction={this.handleCardDelete}
          moveFunction={this.handleCardMove}
          moveCardSelect={<MoveCardSelect {...this.props}/>}
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  handleCardMove = (id) => {
    console.log(id, '-----')
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  } 

  handleCardDelete = (cardId, activeListId) => {
    this.props.deleteCard(this.props.activeBoardId, activeListId, cardId);
  }

  render() {
    return (
      <div className="listsWrapper">
       <CreateListForm {...this.props} />
       { this.renderListItems() }
      </div>
    );
  }

}

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state) {
  return {
    activeBoard: state.activeBoardReducer.activeBoard,
    activeBoardId: parseInt(state.createTaskReducer.activeBoardId)
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {
    addList: bindActionCreators(addList, dispatch),
    deleteCard: bindActionCreators(deleteCard, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListContainer);
