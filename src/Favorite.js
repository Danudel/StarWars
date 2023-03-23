
import React from 'react';
import axios from 'axios';
import './favorite.css';

class Favorite extends React.Component {
    constructor (props){
      super(props);
      this.state={
        favoriteMovie: -1,  //default: -1
        moviesArr: []
    }

    this.getMovies= this.getMovies.bind(this);
    this.updateFavorite= this.updateFavorite.bind(this);

    
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

    updateFavorite(event){   //changes the favorite movie
        const updatedMovie= event.target.value;
        this.setState({
            favoriteMovie: updatedMovie
        })

        console.log(this.state.favoriteMovie)
    }


    componentDidMount(){
        this.getMovies();
       
    }

    render() {
      let moviesForm=  this.state.moviesArr.map((movie)=> 
        <div>
            <input type="radio" value={movie.title} name="favoriteMovie" onChange={this.updateFavorite} />
            {movie.title}
        </div> )

      return ( 
        <div className='jumbotron'>
           <h6>Choose your favorite Star Wars movie:</h6> 
                    {moviesForm}
       </div>

      );
    }
  } 
  
  
  
  
  export default Favorite;
