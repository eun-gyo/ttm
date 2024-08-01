import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='inner'>
                <h1>로그인</h1>
                <p>
                    TMDB 내 편집과 작품 평가를 하거나 작품 추천을 받기 위해서는, 회원님의 계정에 로그인 해야 합니다. 만약 계정이 없다면, 무료로 간편하게 계정을 만들 수 있습니다.<br/>
                    <span>여기를 눌러</span> 가입하실 수 있습니다.<br/>
                    <br/>가입은 했는 데 아직 확인 메일을 받지 못하셨다면, <span>여기를 눌러</span> 메일 재발송을 해주세요.
                </p>
                <div className='idpw'>
                    <h4>아이디</h4>
                    <input type="text" placeholder='아이디를 입력해주세요.' />
                    <h4>패스워드</h4>
                    <input type="password" placeholder='비밀번호를 입력해주세요.'/>
                </div>
                <button className='loginbtn'>로그인</button>
            </div>
        </div>
        
    )
}

export default Login