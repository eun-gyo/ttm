import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faStar, faX } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "./Modal.css"

const Modal = ({
    setPop,
    backdrop_path,
    name,
    title,
    first_air_date,
    release_date,
    overview,
    vote_average
}) => {

    return (
        <div className='modalpopup'>
            <div className="modal_wrap">
                <div className="modal">
                    <div className="close" onClick={()=>setPop(false)}>
                        <span><FontAwesomeIcon icon={faX} /></span>
                    </div>
                    <img
                    className='popupimg'
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={title||name} />
                    <div className="poptxt">
                        <div className="txtcover"></div>
                        <p className='opendate'>
                            <span>개봉일 <FontAwesomeIcon icon={faCalendarCheck} /> {release_date||first_air_date}</span>
                        </p>
                        <h2>{name||title}</h2>
                        <p className='star'>
                            <span>평점<FontAwesomeIcon icon={faStar} /> {vote_average}</span>
                        </p>
                        <p className='overv'>
                            {overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal