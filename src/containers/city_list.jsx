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
      <div className="cities">City List
        {this.props.cities.map((city) => {
          return (
            <li className="list-group-item" key={city.name}>
              <City city={city} />
            </li>
          )}
        )}
      </div>
    )
  };
}

function mapStateToProps(state){
  return {
    cities: state.cities
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { loadCities: loadCities },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
