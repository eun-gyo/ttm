import React, { useEffect, useState } from 'react'
import requests from '../api/requests';
import axios from '../api/axios';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Banner = () => {
    // 4 ) 상태변수(영화정보를 가져오는)
    const [movie,setMovie] = useState([]);
    // 6 ) 클릭했는지 아닌지
    const [isClick,setIsClick] = useState(false);
    console.log(isClick)
    // 1 ) 실행되자마자 함수 호출(data요청)
    useEffect(()=>{
        fetchData();
    },[])

    // 2 ) 현재 상영중인 영화정보 가져오기
    const fetchData  = async() => {
        const request = await axios.get(requests.fetchNowPlay);
        console.log(request)
        setMovie(request.data.results)

        // 3 ) 20개의 영화배열 data 중에서-
        // 영화하나의 id만 가져오기(random)
        const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id
        console.log(movieId)

        // 5 ) 랜덤한 id에 해당하는 영화정보를 가져오기(video정보 포함)
        // 한 개의 id에 해당하는 영화정보
        console.log('영화정보',movie)
        const {data:detail} = await axios.get(`movie/${movieId}`,{
            // 비디오 정보도 포함하겠다
            params :{append_to_response : "videos"}
        })
        console.log(detail)
        setMovie(detail)
    }
    console.log("id에 해당하는 영화정보 하나",movie)
    if(!isClick){
    return (
        <div className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center top",
                backgroundSize: "cover"
            }}>
            <div className="contents">
                <div className="title">
                    <h1>{movie.title}</h1>
                </div>
                <div className="btn_wrap">
                    <button className='play' onClick={()=>setIsClick(true)}>
                        <FontAwesomeIcon icon={faPlay} /> 재생</button>
                    <button className='info'>
                        <FontAwesomeIcon icon={faCircleQuestion} /> 상세정보</button>
                </div>
                {/* 줄거리 */}
                <div className="description">
                    {movie.overview}
                </div>
            </div>
        </div>
    )
    }else{
        // true일때
        return (
            <Container>
                <Inner>
                <Iframe
                // width="560"
                // height="315"
                src= {`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                >
                </Iframe>
                </Inner>
            </Container>
        )
    }

}

// style component
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const Inner = styled.div`
    width: 100%;
    height: 100%;
`
const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
`


export default Banner



