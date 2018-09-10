import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBoard } from './actions';
import CardList from '../../components/CardList';

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
    const { loading } = this.props;
    return (
      <div>
        Single Board View container
        { loading && <div>loading...</div> }
        { !loading &&
          <div>
            <p>{this.props.activeBoard.name}</p>
            <CardList {...this.props} />
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
