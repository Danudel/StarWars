import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class Movies extends React.Component {
    constructor (props){
      super(props);
        this.state={
            moviesArr: []
        }
        this.getMovies= this.getMovies.bind(this);
    }
  


    getMovies(){
        return axios.get("https://swapi.dev/api/films")
        .then((response)=>{
            console.log(response.data.results)
            this.setState({
                moviesArr: response.data.results
            })
        })
    }

    componentDidMount(){
        this.getMovies();
    }
    render() {
       
      
      return ( this.state.moviesArr.map((movie)=> <Movie id={movie.episode_id} name={movie.title} description={movie.opening_crawl}/>)
      );
    }
  } 
  
  
  
  
  export default Movies;