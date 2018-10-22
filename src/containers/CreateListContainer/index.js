import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateListForm from '../../components/CreateListForm';
import { addList } from './actions'


class CreateListContainer extends Component {

	render() {
		return (
			<CreateListForm {...this.props} />
		);
	}

}

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state) {
  return {
    activeBoardId: state.activeBoardReducer.activeBoard.id
  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {
  	addList: bindActionCreators(addList, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListContainer);


