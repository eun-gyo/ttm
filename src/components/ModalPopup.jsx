import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './ModalPopup.css'

const ModalPopup = ({
    setModalOpen,
    backdrop_path,
    first_air_date,
    release_date,
    title,name,overview,
    vote_average,
    vote_count

}) =>{
    return (
        <div className='modalpopup'>
            <div className="modal_wrap">
                <div className="modal">
                    <div className='closeicon' onClick={()=>setModalOpen(false)}>
                        <span className='closebtn'><FontAwesomeIcon icon={faX} /></span>
                    </div>
                    <img
                    className='modalimg'
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt="영화정보"
                    />
                    <div className="content">
                        <p>
                            <span>100% 일치</span> 개봉날짜 : {first_air_date || release_date} 
                        </p>
                        <h2>{title || name}</h2>
                        <p>
                            <span className='score'>평점 : {vote_average}</span>
                            <span className='count'>조회수 : {vote_count}</span>
                            </p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPopup