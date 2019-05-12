import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadCities } from '../actions/index';

import City from './city';

class CityList extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.loadCities();
  }

  render() {
    return(
      <div className="cities">Cities:
        {this.props.cities.map((city) => {
          return (
              <City city={city} />
          )}
        )}
      </div>
    )
  };
}

function mapStateToProps(state){
  return {
    cities: state.cities,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { loadCities: loadCities },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
