import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Cards.css';



const Cards = ({item,handleClick}) => {

    
    return (
        <div className='cards' onClick={handleClick}>
            <div className="imgbox">
                <img className='cardimg'
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
                />
            </div>
            <h3>{item.title || item.name}</h3>
            <p>개봉일 : {item.release_date || item.first_air_date}</p>
            <span><FontAwesomeIcon icon={faHeart}/> {item.vote_count}</span>&nbsp;&nbsp;
            <span>평점⭐{Math.floor(item.vote_average)}</span>
        </div>
    )
}

export default Cards