import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navi = useNavigate()
    
    // login page로 가는 함수
    const handleLogin=()=>{
        navi("/ttm/login")
    }

    const gomain=()=>[
        navi("/ttm/index.html")
    ]
    

    return (
        <div className='footer'>
            <div className="footerlogo">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="푸터로고"
                onClick={gomain}
                />
                <button onClick={handleLogin}>안녕하세요! 로그인 하시겠습니까?</button>
            </div>
            <div className="footerlist">
                <ul>
                    <li><span>기본정보</span></li>
                    <li>TMDB는...</li>
                    <li>문의하기</li>
                    <li>토론 지원</li>
                    <li>API</li>
                    <li>시스템 상태</li>
                </ul>
                <ul>
                    <li><span>참여하기</span></li>
                    <li>기여 지침서</li>
                    <li>새 영화 추가</li>
                    <li>새 TV프로그램 추가</li>
                </ul>
                <ul>
                    <li><span>커뮤니티</span></li>
                    <li>가이드라인</li>
                    <li>토론 내역</li>
                    <li>기여 랭킹</li>
                </ul>
                <ul>
                    <li><span>법적 사항</span></li>
                    <li>서비스 이용약관</li>
                    <li>API 이용약관</li>
                    <li>개인정보약관</li>
                    <li>DMCA 정책</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer