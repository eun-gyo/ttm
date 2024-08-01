import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    // header show
    const [show,setShow]=useState(false)
    // scroll 이벤트
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 60){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    },[])
    
    // 클릭하면 페이지 이동
    const navi = useNavigate()
    // login page로 가는 함수
    const handleLogin=()=>{
        navi("/ttm/login")
    }
    

    return (
        <div className={`header ${show && "header-black"}`}>
            <div className='inner'>
                <div className="hdwrap">
                    {/* 클릭시 새로고침 되게 하는 이벤트 */}
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg?"
                    alt="메인로고" 
                    className='logo' 
                    onClick={()=>window.location.href="/ttm/index.html"}
                    />
                    <ul className='gnb'>
                        <li>영화</li>
                        <li>TV프로그램</li>
                        <li>인물</li>
                        <li>More</li>
                    </ul>
                </div>
                <div className="iwrap">
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                    <div>KR</div>
                    <div className='login_button' onClick={handleLogin}>로그인</div>
                    <div>회원가입</div>
                    <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
            </div>
        </div>
    )
}

export default Header

