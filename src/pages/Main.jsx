import React from 'react'
import Banner from '../components/Banner';
import Movies from '../components/Movies';
import requests from '../api/requests';

const Main = () => {
    
    return (
        <div className='main'>
            <Banner />
            <Movies title="트렌드" fetchUrl={requests.fetchTrend}/>
            <Movies title="현재 상영중인 영화" fetchUrl={requests.fetchNowPlay}/>
            <Movies title="평점이 높은 영화" fetchUrl={requests.fetchTopRate}/>
        </div>
    )
}

export default Main