'use strict';
import _ from 'lodash';
import React, { Component } from 'react';
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';

const movies = [
{
  title: 'Batman',
  description: 'Lorem ipsum dolor sit amet, usu ei inermis facilis delicata, intellegat temporibus at quo. Hinc epicuri menandri id per, ei omnes aliquam bonorum duo. Eam no epicuri apeirian tincidunt, mei te tation everti fierent. Ut quo accusamus liberavisse. Ius justo noster te.',
  image: 'https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg'
},
{
  title: 'Spider-Man',
  description: 'Lorem ipsum dolor sit amet, usu ei inermis facilis delicata, intellegat temporibus at quo. Hinc epicuri menandri id per, ei omnes aliquam bonorum duo. Eam no epicuri apeirian tincidunt, mei te tation everti fierent. Ut quo accusamus liberavisse. Ius justo noster te.',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
},
{
  title: 'Kill Bill',
  description: 'Lorem ipsum dolor sit amet, usu ei inermis facilis delicata, intellegat temporibus at quo. Hinc epicuri menandri id per, ei omnes aliquam bonorum duo. Eam no epicuri apeirian tincidunt, mei te tation everti fierent. Ut quo accusamus liberavisse. Ius justo noster te.',
  image: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Kill_bill_vol_one_ver.jpg'
},
{
  title: 'Robin Hood',
  description: 'Lorem ipsum dolor sit amet, usu ei inermis facilis delicata, intellegat temporibus at quo. Hinc epicuri menandri id per, ei omnes aliquam bonorum duo. Eam no epicuri apeirian tincidunt, mei te tation everti fierent. Ut quo accusamus liberavisse. Ius justo noster te.',
  image: 'http://www.daringtodo.com/wp-content/uploads/2010/03/robin.jpg'
}
]
export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      movies
    };
  }


  render() {
    return (
      <div>
      <h1>Add Movie</h1>
      <CreateMovie createMovie={this.createMovie.bind(this)} />
      <MovieList movies={this.state.movies}
        saveMovie={this.saveMovie.bind(this)}
        deleteMovie={this.deleteMovie.bind(this)}
      />
      </div>
    );
  }

  createMovie(title, description, image){
    this.state.movies.push({
      title,
      description,
      image
    });
    this.setState({movies: this.state.movies});
  }

  saveMovie(oldTitle, oldDescription, oldImage, newTitle, newDescription, newImage){
    const editTitle = _.find(this.state.movies,title => title.title === oldTitle);
    const editDescription = _.find(this.state.movies,description => description.description === oldDescription);
    const editImage = _.find(this.state.movies,image => image.image === oldImage);
    editTitle.title = newTitle;
    editDescription.description = newDescription;
    editImage.image = newImage;
    this.setState({movies:this.state.movies});
  }

  deleteMovie(deleteTitle, deleteDesc){
    _.remove(this.state.movies, title => title.title === deleteTitle);
    _.remove(this.state.movies, description => description.description === deleteDesc);
    this.setState({movies:this.state.movies});

  }
}
