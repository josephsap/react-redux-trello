import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { requestBoards } from './actions';


class NavigationContainer extends Component {

  componentDidMount() {
    this.props.requestBoards();
  }

  render() {
    const boardItems = this.props.boards.map(board => (
      <li 
        key={board.id}
      >
        <Link to={`/boards/${board.id}`}>
          {board.boardName}
        </Link>
      </li>
    ));

    return (
      <div>
        <Link to="/">Home</Link>
        <ul>{boardItems}</ul>
      </div>
    );
  }
}

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state) {
  return {
    boards: state.boardReducer.boards
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestBoards }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
