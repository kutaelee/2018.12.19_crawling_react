import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Myapp({title,poster,genres,synopsis}){
  return (

    <div className="Movie">
    <div className="Movie__Colums">
      <Movie__Poster poster={poster} alt={title}/>
      </div>

        <div className="Movie__Colums">
          <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre,index)=> <MoiveGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Sysnopsis">
        <LinesEllipsis
        text={synopsis}
        maxLine="4"
        ellipsis="..."
        trimRight
        basedOn='letters'
        />
        <br/>
          
      </div>
    </div>
    </div>
  )
}


function Movie__Poster({poster,alt}){
  return(
    <img src={poster} alt={alt} className="Movie__Poster"/>
  )
}

function MoiveGenre({genre}){
  return(
    <span className="Movie__Genre"> {genre} </span>
  )
}
Myapp.propTypes={
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired
}
Movie__Poster.propTypes={
  poster:PropTypes.string.isRequired
}
MoiveGenre.propTypes={
  genre:PropTypes.string.isRequired
}

export default Myapp;
