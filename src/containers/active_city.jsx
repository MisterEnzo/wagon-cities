import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component{
  render() {
    return (
      <div className="active-city">
        <h3>{this.props.city.name}</h3>
        <div>{this.props.city.address}</div>
        <div><img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} /></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    city: state.activeCity
  }
}

export default connect(mapStateToProps, null)(ActiveCity);
