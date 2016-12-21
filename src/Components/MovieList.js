'use strict';
import _ from 'lodash';
import React, { Component } from 'react';
import MovieListHeader from './MovieListHeader';
import MovieListItem from './MovieListItem';

export default class MovieList extends Component {
  renderMovies(){
    const props = _.omit(this.props, 'movies');
    return _.map(this.props.movies, (movie, index) => <MovieListItem key={index} {...movie}{...props}/>);
  }
  render() {
    return (
      <table>
        <MovieListHeader />
        <tbody>
        {this.renderMovies()}
        </tbody>
      </table>
    );
  }
}
