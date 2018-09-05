import React, { Component }from 'react';
import { connect } from 'react-redux';
import { selectBoard } from '../BoardContainer/actions';

export class SingleBoardContainer extends Component {
  componentDidMount() {
    // selectBoard();

    this.props.selectBoard(this.props.match.params.id);
    console.log(this.props, '00000000---0000');
  }
  
  render() {
    return (
      <div>Single Board View cont</div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  console.log("ii", state)
  return {
    activeBoard: state.boardReducer.boards[ownProps.match.params.id]
  };
}

// function mapDispatchToProps(dispatch) {
//   console.log(this.props, '---')
//   return {
//     selectBoard: () => dispatch(selectBoard(this.props.activeBoard))
//   };
// }
// export default SingleBoardContainer;
export default connect(mapStateToProps, { selectBoard })(SingleBoardContainer);
