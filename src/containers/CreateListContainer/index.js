import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardListItem from '../../components/CardListItem';
import CreateListForm from '../../components/CreateListForm';
import { addList } from '../SingleBoardContainer/actions'


class CreateListContainer extends Component {

  renderListItems() {
    const { activeBoard } = this.props;
    if(activeBoard) {
      return <CardListItem name={"the Name"} activeBoard={activeBoard}></CardListItem>
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
    activeBoardId: state.activeBoardReducer.activeBoardId,
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {
    addList: bindActionCreators(addList, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListContainer);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import CreateListForm from '../../components/CreateListForm';
// import { addList } from '../SingleBoardContainer/actions'


// class CreateListContainer extends Component {

// 	render() {
//     console.log(this.props, '0000')
// 		return (
// 			<CreateListForm {...this.props} />
// 		);
// 	}

// }

// // mapStateToProps() is a utility which helps your component get updated state
// function mapStateToProps(state) {
//   return {
//     activeBoard: state.activeBoardReducer.activeBoard,
//     activeBoardId: state.activeBoardReducer.activeBoardId,
//   };
// }

// // mapDispatchToProps() is a utility which will help your component to fire an action event
// function mapDispatchToProps(dispatch) {
//   return {
//   	addList: bindActionCreators(addList, dispatch)
//   };
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CreateListContainer);


