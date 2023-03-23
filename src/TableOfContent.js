import './tableOfContent.css'
import React from "react";
import axios from 'axios';
import {Nav} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

class TableOfContent extends React.Component {
    constructor (props){
      super(props);
        this.state={
            moviesArr: [],
            navArr:[]
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
       let navArr= this.state.moviesArr.map((movie)=> 
       <Nav.Item className='navItem'>
               <HashLink smooth to={`#${movie.episode_id}`}>
                 {movie.title}
            </HashLink>

       </Nav.Item>
       
        )

       
      return ( 
        <div className="container"> 
             <Nav className=" d-md-block sidebar">
                  {navArr}
             </Nav>
        </div>

      );
    }
  } 
  



export default TableOfContent