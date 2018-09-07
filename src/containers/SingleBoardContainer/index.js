import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBoard } from './actions';

export class SingleBoardContainer extends Component {
  
  componentDidMount() {
    console.log('render in did mount')
    // this.props.selectBoard(this.props.match.params.id);
  }

  componentWillUpdate(prevProps) {
    console.log('update');
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.selectBoard(this.props.match.params.id);
    }
  }
  
  render() {
    return (
      <div>
        Single Board View container
        {this.props.activeBoard.name}
      </div>
    );
  }
};

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state, ownProps) {
  return {
    activeBoard: state.boardReducer.boards[ownProps.match.params.id]
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {
    selectBoard: bindActionCreators(selectBoard, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBoardContainer);
