import "./Commerce.css";
import { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import Login from './Login';
import Signup from './Signup';
import Usersign from './Usersign';
import UsersignTest from './Usersigntest';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

    function Commerce() {

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
                    console.log('바깥을 눌렀습니다')
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
        <div className="main-wrap">
            <div className="header-wrap">
                <div className="header-inner flex flex-ju-start flex-align-center">
                    <span className="header-icon"/>
                    <span className="header-logo"/>
                </div>
            </div>
            <Routes>  
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/usersign" element={<Usersign />} />
            </Routes> 
            <div className="login-footer-wrap">
                <div className="footer-inner">
                    <ul className="footer-link-list">
                        <li className="footer-link-item">
                            <a href="" className="footer-link">
                                <span className="footer-text">개인정보 처리방침</span>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright-pc">
                        <a href="" className="footer-link-logo">
                            <i className="naver-logo"></i>
                        </a>
                        <span className="footer-link-text">Copyright&nbsp;
                        <a href="">
                            <span>©<b>NAVER Corp.</b></span>
                        </a>
                        &nbsp;All Rights Reserved.
                        </span>
                    </div>
                    <div className="footer-copyright-m">
                        <a href="">
                            <span>©<b>NAVER Corp.</b></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }

export default Commerce;
