import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mapValues from 'lodash/mapValues';
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

  renderListItems() {
    const { activeBoard } = this.props;
    if(activeBoard) {
      const mappedList = mapValues(activeBoard.data, list => list.name);
      const mappedKeys = Object.keys(mappedList)
      return mappedKeys.map((id, listItem) => {
        console.log(listItem, id, 'hi')
        return <CardList id={id} key={id} name={mappedList[id]} />
      });
    }
  }
  
  render() {
    const { loading, activeBoard } = this.props;
    return (
      <div>
        Single Board View container
        { loading && <div>loading...</div> }
        { !loading &&
          <div>
            <p>{activeBoard.name}</p>
            {this.renderListItems()}
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
