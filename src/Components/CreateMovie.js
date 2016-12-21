'use strict';
import React, { Component } from 'react';

export default class MovieList extends Component {
  render() {
    return (
      <div>
      <form onSubmit= {this.handleCreatedMovie.bind(this)}>
      <input type="text" placeholder="Add a title" ref="inputTitle"/>
      <input type="text" placeholder="Add description" ref="inputDesc"/>
      <input type="text" placeholder="Add image url" ref="inputImg"/>
      <button>Add</button>
      </form>
      </div>
    );
  }

  handleCreatedMovie(event){
    //prevent the side to reload
    event.preventDefault();
    this.props.createMovie (this.refs.inputTitle.value,this.refs.inputDesc.value, this.refs.inputImg.value);
    this.refs.inputTitle.value = '';
    this.refs.inputDesc.value = '';
    this.refs.inputImg.value = '';

  }
}
