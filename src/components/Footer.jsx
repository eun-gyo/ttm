import React from 'react';
import './Footer.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {


    return (
        <div className='footer'>
            <FooterContainer>
                <div className="footerContents">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="list_wrap">
                        <ul>
                            <li><a href="#">화면 해설</a></li>
                            <li><a href="#">투자 정보(IR)</a></li>
                            <li><a href="#">법적 고지</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">고객 센터</a></li>
                            <li><a href="#">입사 정보</a></li>
                            <li><a href="#">쿠키 설정</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">기프트 카드</a></li>
                            <li><a href="#">이용 약관</a></li>
                            <li><a href="#">회사 정보</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">미디어 센터</a></li>
                            <li><a href="#">개인정보</a></li>
                            <li><a href="#">문의하기</a></li>
                        </ul>
                    </div>
                    <button>서비스 코드</button>
                    <p>
                        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:제2018-서울종로-0426호 전화번호:00-308-0161 (수신자부담)<br/>
                        대표:레지널드 숀 톰프슨<br/>
                        이메일주소:korea@netflix.com<br/>
                        주소:대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br/>
                        사업자등록번호:165-87-00119<br/>
                        클라우드 호스팅:Amazon Web Services Inc.<br/>
                        공정거래위원회 웹사이트
                    </p>
                    
                </div>
            </FooterContainer>
        </div>
    )
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 130px 0 30px;
    width: 100%;
`


export default Footer