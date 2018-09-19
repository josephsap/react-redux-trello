import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateBoardForm from '../../components/CreateBoardForm';


class CreateBoardContainer extends Component {

	render() {
		return (
			<CreateBoardForm {...this.props} />
		);
	}

}

// mapStateToProps() is a utility which helps your component get updated state
function mapStateToProps(state) {
  return {

  };
}

// mapDispatchToProps() is a utility which will help your component to fire an action event
function mapDispatchToProps(dispatch) {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardContainer);


