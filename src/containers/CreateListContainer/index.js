import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardListItem from '../../components/CardListItem';
import CreateListForm from '../../components/CreateListForm';
import { addList } from '../SingleBoardContainer/actions'


class CreateListContainer extends Component {

  renderListItems() {
    const { activeBoard, activeBoardId } = this.props;
    console.log(this.props, 'createlistcontainer')
    if(activeBoard) {
      return (
        <CardListItem 
          activeBoard={activeBoard}
          activeBoardId={activeBoardId}
          {...this.props}
        />
      );
    }
  }

  render() {
    return (
      <div>
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
    addList: bindActionCreators(addList, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListContainer);
