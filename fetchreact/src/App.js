import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    movies: []
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(parsedJSON => this.setState({
      movies: parsedJSON
    }))
  }
  
  render() {
    console.log(this.state.movies);
    return (
      <div className="content">
            <div className="films">Films</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Producer</th>
                  <th>Id</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              {this.state.movies.map(
                movie => 
                  <tr>
                    <td>{movie.title}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.producer}</td>
                    <td>{movie.id}</td>
                    <td>{movie.description}</td>
                  </tr>
              )}
            </tbody>
            </table>
      </div>
    );
  }

}

export default App;
