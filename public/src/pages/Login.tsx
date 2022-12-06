import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Signup from './Signup';
import "./Commerce.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import { setCredentials } from '../authslice/authSlice';
import { loginUser } from '../store/userSlice';

function Login() {
    
    const [cookies] = useCookies([]);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 다른 페이지로 이동히게 해주는 Hook.
    
//     useEffect(() => {
//     if (cookies.jwt) {
//       navigate("/");
//     }
//   }, [cookies, navigate]);

  const [values, setValues] = useState({ id: "", password: "" });


//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//      // 적은 내용이 이메일이 서버로 보내지고, 
//      // 이메일을 찾고 비밀번호를 비교한 후 토큰을 생성해서 쿠키에 저장하여 클라이언트에게 전해줌
//     let body = {
//         id: id,
//         password: Password
//     }

//     dispatch(loginUser(body))
//     .then(response => {
//         if(response.payload.loginSuccess) {
//             props.history.push('/')
//         } else {
//             alert('Error')
//         }
//     }) 
// }
  
  const handleSubmit = async (event : any) => {
    event.preventDefault();
    try {
        // dispatch(setCredentials({ ...values }))
        dispatch(loginUser(values));
      const { data } = await axios.post( "http://localhost:8080/smartstore/commerce/login", { ...values, },
        { withCredentials: true });
        console.log(data)
      if (data) {
        if (data.errors) {
            const { id, password } = data.errors;
            console.log(id)
            console.log(password)
        } else {
          navigate("/home");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

        const [inputClickNumber, setInputClickNumber] = useState(0);
        const [inputClick, setInputClick] = useState(false);
        const inputRef = useRef<HTMLUListElement>(null);
        
        const mouseEnter = (e:any) => {
            // $('.login-item').removeClass('login-item-hover');
            $(e.target).addClass('login-item-hover')
        }

        const mouseLeave = (e:any) => {
            $('.login-item').removeClass('login-item-hover');
        }

            useEffect(() => {
                const clickOutside = (e : any) => {
        
                // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
                // useRef의 current 값은 선택한 DOM을 말함.
                // 드롭메뉴를 제외한 나머지 공간을 클릭하면 닫히게된다.
        
                if (inputClick && inputRef.current && !inputRef.current.contains(e.target)) {
                    setInputClick(false);
                    setInputClickNumber(0);
                } 
                };
            
                document.addEventListener("mousedown", clickOutside);
            
                return () => {
                // Cleanup the event listener
                document.removeEventListener("mousedown", clickOutside);
                };
            }, [inputClick]);

    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="layout-wrap">
                <div className="layout-inner">
                    <div className="login-content">
                        <h2 className="login-title">로그인</h2>
                        <div className="login-desc">네이버 커머스 ID로 로그인해 주세요.</div>
                        <div className="login-notice">기존 스마트스토어센터 회원님은 <strong className="bold">사용 중인 아이디로 로그인</strong>해 주세요.<br></br>
                        이미 네이버 커머스 ID 회원 전환을 하신 회원님은 <strong className="bold">전환한 아이디로 로그인</strong>해 주세요.</div>
                        <div className="n-commerce-find">
                            <a href="" className="n-commerce-text">네이버 커머스 ID 알아보기</a>
                        </div>
                        <div className="login-area">
                            <div className="login-login-content">
                                <ul className="login-type">
                                    <li className="login-type-item">네이버 아이디로 로그인</li>
                                </ul>
                                <div className="login-content-box">
                                    <ul className="login-list" ref={inputRef}>
                                        <li className={ inputClick && inputClickNumber == 1 ? "login-item login-item-active" : "login-item"}  onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } >
                                            <input type="text" name="id" placeholder="아이디" className="login-input" onClick={() => { setInputClick(true); setInputClickNumber(1);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>
                                        </li>
                                        <li className={ inputClick && inputClickNumber == 2 ? "login-item login-item-active" : "login-item"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } >
                                            <input type="password" name="password" placeholder="비밀번호" className="login-input" onClick={() => { setInputClick(true); setInputClickNumber(2);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>
                                        </li>
                                    </ul>
                                    <div className="login-btn-wrap">
                                        <button type="submit" className="login-btn">
                                            <span className="login-btn-text">로그인</span>
                                        </button>
                                    </div>
                                    <ul className="login-help">
                                        <li className="login-help-item">
                                            <a href="">
                                                <span className="login-help-text">아이디 찾기</span>
                                            </a>
                                        </li>
                                        <li className="login-help-item">
                                            <a href="">
                                                <span className="login-help-text">비밀번호 찾기</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="login-help-box">
                                <span className="login-help-text">네이버 커머스 ID 회원이 아닌 스마트스토어센터 이용자이신가요?</span>
                                <button type="button" className="login-help-btn">
                                    <i className="login-help-btn-icon"></i>
                                </button>

                            </div>
                            <div className="login-subnotice">
                                <span className="login-subnotice-text">아직 네이버 커머스 ID 회원이 아니신가요?</span>
                                <a href="" className="login-subnotice-signup">
                                    <span className="login-subnotice-signup-text"><Link to="../usersign">회원가입하기</Link></span>
                                </a>
                            </div>
                            <ul className="login-notice-list">
                                <li className="login-notice-list-item">
                                    기존 스마트스토어센터 회원님들은 네이버 커머스 ID로 회원 전환을 하시면 기존과 동일하게 스마트스토어센터를 이용할 수 있습니다.
                                </li>
                                <li className="login-notice-list-item">
                                    <strong className="bold">스마트스토어센터 아이디를 여러 개로 운영 중이라면, 사용 중인 모든 아이디를 전환해 주셔야 합니다.</strong>
                                </li>
                                <li className="login-notice-list-item">
                                    회원 <strong className="bold">전환 후에는 전환한 아이디로만 서비스 이용</strong>이 가능합니다
                                </li>
                                <li className="login-notice-list-item">
                                    <a href="">
                                        <span className="login-notice-list-text">네이버 커머스 ID 회원 전환 관련 FAQ 모아보기</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
    }

export default Login;
