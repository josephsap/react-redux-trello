import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBoard, sendActiveBoardToTaskReducer } from './actions';
import CreateListContainer from '../CreateListContainer';

export class SingleBoardContainer extends Component {
  
  componentDidMount() {
    this.props.selectBoard(this.props.match.params.id);
    this.props.sendActiveBoardToTaskReducer(this.props.match.params.id);
  }

  componentWillUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.selectBoard(prevProps.match.params.id);
      this.props.sendActiveBoardToTaskReducer(this.props.match.params.id);
    }
  }
  
  render() {
    console.log(this.props, '-0-0-0-')
    const { loading } = this.props;
    return (
      <div>
        { loading && <div>loading...</div> }
        { !loading &&
          <CreateListContainer {...this.props}/>
        }
      </div>
    );
  }
};

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state, ownProps) {
  return {
    activeBoard: state.activeBoardReducer,
    activeBoardId: parseInt(state.createTaskReducer.activeBoardId),
    loading: state.activeBoardReducer.loading
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {
    selectBoard: bindActionCreators(selectBoard, dispatch),
    sendActiveBoardToTaskReducer: bindActionCreators(sendActiveBoardToTaskReducer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBoardContainer);
