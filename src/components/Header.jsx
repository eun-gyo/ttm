import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './Header.css'

const Header = () => {
    // header show
    const [show,setShow]=useState(false)
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 50){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    },[])


    return (
        <div className={`header ${show && "header-black"}`}>
            <div className="hgnb_wrap">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png?"
                alt="넷플릭스"
                className='logo'
                onClick={()=>window.location.href="/netflix/index.html"}/>
                <ul className="gnb">
                    <li>홈</li>
                    <li>시리즈</li>
                    <li>영화</li>
                    <li>New!요즘 대세 컨텐츠</li>
                    <li>내가 찜한 리스트</li>
                    <li>언어별로 찾아보기</li>
                </ul>
            </div>
            <div className="icon_wrap">
                <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                <div>키즈</div>
                <div><FontAwesomeIcon icon={faBell}/></div>
                <div>
                    <img
                    src="https://i.pinimg.com/474x/0c/91/71/0c9171ce965fb4ec175c2b001516e754.jpg"
                    alt="아바타아이콘" 
                    className='avatar'/>
                    <span><FontAwesomeIcon icon={faCaretDown} /></span>
                </div>
            </div>
        </div>
    )
}

export default Header