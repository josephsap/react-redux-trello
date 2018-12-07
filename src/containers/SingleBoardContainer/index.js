import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBoard } from './actions';
import CardListContainer from '../CardListContainer';
import CreateListContainer from '../CreateListContainer';

export class SingleBoardContainer extends Component {
  
  componentDidMount() {
    this.props.selectBoard(this.props.match.params.id);
  }

  componentWillUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.selectBoard(prevProps.match.params.id);
    }
  }
  
  render() {
    const { loading, activeBoard } = this.props;
    return (
      <div>
        { loading && <div>loading...</div> }
        { !loading &&
          <div>
            <CreateListContainer activeBoardId={activeBoard.id}/>
            <CardListContainer activeBoardData={activeBoard}/>
          </div>
        }
      </div>
    );
  }
};

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state, ownProps) {
  return {
    activeBoard: state.activeBoardReducer.activeBoard,
    loading: state.activeBoardReducer.loading
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {
    selectBoard: bindActionCreators(selectBoard, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBoardContainer);


// import React, { Component, Fragment }from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { selectBoard, addList } from './actions';
// import CardListContainer from '../CardListContainer';
// //import CreateListContainer from '../CreateListContainer';
// import CreateListForm from '../../components/CreateListForm';

// export class SingleBoardContainer extends Component {
  
//   componentDidMount() {
//     this.props.selectBoard(this.props.match.params.id);
//   }

//   componentWillUpdate(prevProps) {
//     if(this.props.match.params.id !== prevProps.match.params.id) {
//       this.props.selectBoard(prevProps.match.params.id);
//     }
//   }
  
//   render() {
//     const { loading, activeBoard } = this.props;
//     return (
//       <div>
//         { loading && <div>loading...</div> }
//         { !loading &&
//           <Fragment>
//             <CreateListContainer activeBoardId={activeBoard.id}/>
//             <CardListContainer activeBoardData={activeBoard}/>
//           </Fragment>
//         }
//       </div>
//     );
//   }
// };

// // mapStateToProps() is a utility which helps your component get updated state
// function mapStateToProps(state, ownProps) {
//   let aBoardLists = [];
//   if(state.activeBoardReducer.activeBoard !== undefined && state.activeBoardReducer.activeBoard !== null) {
//     aBoardLists = state.activeBoardReducer.activeBoard.lists
//   }
//   return {
//     activeBoard: state.activeBoardReducer.activeBoard,
//     loading: state.activeBoardReducer.loading
//     //lists: aBoardLists
//   };
// }

// // mapDispatchToProps() is a utility which will help your component to fire an action event
// function mapDispatchToProps(dispatch) {
//   return {
//     //...bindActionCreators({ selectBoard, addList }, dispatch)
//     addList: bindActionCreators(addList, dispatch),
//     selectBoard: bindActionCreators(selectBoard, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SingleBoardContainer);
