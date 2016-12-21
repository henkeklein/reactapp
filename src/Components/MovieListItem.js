'use strict';
import React, { Component } from 'react';

export default class MovieListItem extends Component {
  constructor(props){
    super(props);

      this.state ={
        isEditing: false
      };
    }

    renderMovieSection(){
      const {title, description, image} = this.props;

      if(this.state.isEditing){
        return(
          <div>
            <form onSubmit={this.onSaveClick.bind(this)}>
            <input type='text' defaultValue={title} ref='editTitle' />
            <input type='text' defaultValue={description} ref='editDescription' />
            <input type='text' defaultValue={image} ref='editImage' />
            </form>
          </div>
        );
      }

      return(
        <div>
        <h4>{title}</h4>
        <td>{description}</td>
        <div><img src= {image} width={400} height={400} mode='fit'/></div>
        </div>
      );
    }

    renderEditAction(){
      if(this.state.isEditing){
        return(
          <td>
          <button onClick= {this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.cancelClick.bind(this)}>Cancel</button>
          </td>
        );
      }
      return(
        <td>
        <button onClick={this.onEdit.bind(this)}>Edit</button>
        <button onClick={this.props.deleteMovie.bind(this, this.props.title)}>Delete</button>
        </td>
      );
    }

  render() {
    return (
      <tr>
        <td>{this.renderMovieSection()}</td>

        {this.renderEditAction()}
      </tr>
    );
  }

  onEdit(){
    this.setState({isEditing: true});
  }
  cancelClick(){
    this.setState({isEditing: false});
  }
  onSaveClick(event){
    event.preventDefault();
    const oldTitle=this.props.title;
    const oldDescription=this.props.description;
    const oldImage=this.props.image;
    const newTitle=this.refs.editTitle.value;
    const newDescription=this.refs.editDescription.value;
    const newImage=this.refs.editImage.value;
    this.props.saveMovie(oldTitle, oldDescription, oldImage, newTitle, newDescription, newImage);
    this.setState({isEditing:false});
  }
}
