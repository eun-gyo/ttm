import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import './AllMovie.css'
import ModalPopup from './ModalPopup';

const AllMovie = ({title,fetchUrl}) => {
    // 영화정보 객체 배열([20개])
    const [movies,setMovies]=useState([])

    // 해당 선택된 영화정보 1개
    const [movieSelect,setMovieSelect]=useState({})

    // 모달팝업창이 open/close 알려주는 함수
    const [modalOpen,setModalOpen]=useState(false)



    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const requests = await axios.get(fetchUrl);
        console.log("여러개를 한방에", requests)
        setMovies(requests.data.results)
    }
    console.log('movies:', movies)

    // handle Click 모달팝업
    const handleClick=(movies)=>{
        console.log("선택된 영화" , movies)
        setMovieSelect(movies)
        setModalOpen(true)
    }
    console.log("선택된 상세 영화정보 : ",movieSelect ,modalOpen)
    return (
        <div className='allMovie'>
            <h2>{title}</h2>
            <div className="posters">
                {
                movies.map((item)=>
                    <img
                    className='allmovimg'
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title}
                    onClick={()=>handleClick(item)}
                    />
                )
                }
            </div>
            {/* modalOpen 값이 true일때 모달팝업이 오픈된다. */}
            {
                modalOpen && (
                    <ModalPopup
                    setModalOpen={setModalOpen} {...movieSelect}/>
                )
            }
        </div>
    )
}

export default AllMovie