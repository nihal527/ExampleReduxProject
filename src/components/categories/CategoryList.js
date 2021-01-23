import React, { Component } from "react";
import { connect } from "react-redux";
class CategoryList extends Component {
  render() {
    return (
      <div>
        <h5>Seçili kategory : {this.props.currentCategory.name}</h5>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}
export default connect(mapStateToProps)(CategoryList);
