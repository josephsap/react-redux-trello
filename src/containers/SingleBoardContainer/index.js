import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBoard } from '../BoardContainer/actions';

export class SingleBoardContainer extends Component {
  componentDidMount() {
    selectBoard(this.props.match.params.id);
  }
  
  render() {
    return (
      <div>Single Board View cont</div>
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
    selectBoard: bindActionCreators({ selectBoard }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBoardContainer);
