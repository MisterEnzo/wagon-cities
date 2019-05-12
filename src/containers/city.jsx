import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeActiveCity } from '../actions/index';

class City extends Component{
  render() {
    let classes = "list-group-item";
    if (this.props.city === this.props.activeCity){
      classes += " selected-city";
    };
    return(
      <div className={classes} onClick={() => this.props.changeActiveCity(this.props.city)}>
        {this.props.city.name}
      </div>
    )
  };
}

function mapStateToProps(state){
  return{
    activeCity: state.activeCity
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { changeActiveCity: changeActiveCity },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
