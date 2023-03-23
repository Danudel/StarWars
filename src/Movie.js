import React from 'react';
import './movie.css';


class Movie extends React.Component {
    constructor (props){
      super(props);


    }

    render() {
            
      return ( 
        <div >
            <h4 id={this.props.id} className='title'>{this.props.name}</h4>
            <p>{this.props.description}</p>

        </div>
      );
    }
  } 
  
  
  
  
  export default Movie;