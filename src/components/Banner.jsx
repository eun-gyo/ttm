import React, { useEffect, useState } from 'react';
import requests from '../api/requests';
import axios from '../api/axios';
import './Banner.css';

const Banner = () => {
    const [movie,setMovie] = useState('');

    // const [isClick,setIsClick] = useState(false);
    // console.log(isClick)
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const request = await axios.get(requests.fetchAction)
        console.log(request)
        setMovie(request.data.results)
    
    // 20개의 영화배열 data 중에서
    // 영화하나의 id만 가져오기(random)
    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id
    console.log(movieId)
    
    // 한 개의 id에 해당하는 영화정보
    console.log('영화정보',movie)
    const {data:detail} = await axios.get(`movie/${movieId}`,{
        // 비디오 정보도 포함하겠다
        params :{append_to_response : "videos"}
    })
    console.log(detail)
    setMovie(detail)

    }
    // console.log("id에 해당하는 영화정보 하나",movie)

    return (
    <div className='banner'
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
        }}>
        <div className="contents">
            <div className="title">
                <h1>환영합니다.</h1>
                <h3>수백만 개의 영화, TV프로그램 및 인물을 발견하세요. 지금 살펴보세요.</h3>
            </div>
            <div className="input">
                <input type="text"
                placeholder='영화,TV프로그램,인물 검색...'
                />
                <button>Search</button>
            </div>
        </div>
    </div>
    )
}

export default Banner