import React, { useEffect, useState } from 'react';
import './Movies.css'
import axios from '../api/axios';
import Cards from './Cards';
import Modal from './Modal';

const Movies = ({title,fetchUrl}) => {
    const [data, setData] = useState([]);
    // 선택된 영화정보 1개
    const [select,setSelect]=useState({});
    // 팝업창의 open/close를 알려주는 함수
    const [pop,setPop]=useState(false);

    useEffect(()=>{
        getMovieData();
    },[])

    const getMovieData= async() => {
        const request = await axios.get(fetchUrl)
        console.log(request)
        setData(request.data.results)
    }
    console.log('data:',data)

    const handleClick = (data) =>{
        console.log("선택된 영화:", select)
        setSelect(data)
        setPop(true)
    }
    console.log("선택된 상세 영화정보:",select,pop)

    return (
        <div className='movies'>
            <h2>{title}</h2>
            <div className="inner">
                <div className='cardlist'>
                {
                    data.map((item)=>
                    <Cards
                        key={item.id}
                        item={item}
                        handleClick={()=>handleClick(item)}
                        setPop={setPop}
                        {...select}
                    /> )
                }
                </div>
            </div>
            {/* 모달팝업 open 값이 true 일때 팝업 오픈 */}
            {
                pop && (
                    <Modal  setPop={setPop} {...select}/>
                )
            }
        </div>
    )
}

export default Movies