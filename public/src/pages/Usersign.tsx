    import { useState, useRef, useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { Link, useNavigate } from "react-router-dom";
    import { RootState } from "../store/store";
    import $ from "jquery";
    import "./Usersign.scss";
    import axios from "axios";
    import { useCookies } from "react-cookie";

    function Usersign() {

        const [cookies] = useCookies(["cookie-name"]);
        const navigate = useNavigate();


//   useEffect(() => {
//     if (cookies.jwt) {
//       navigate("/");
//     }
//   }, [cookies, navigate]);

        const dispatch = useDispatch();
        const [values, setValues] = useState({
            id: "",
            password: "",
            pwcheck: "",
            name: "",
            phone: "",
            email: "",
        });
        
        // const [Id, setId] = useState("");
        // const [Password, setPassword] = useState("");
        // const [PwCheck, setPwCheck] = useState("");
        // const [Name, setName] = useState("");
        // const [Phone, setPhone] = useState("");
        // const [Email, setEmail] = useState("");

        // const onIdHandler = (e) => {
        //     setId(e.target.value)
        // }
    
        // const onPasswordHandler = (e) => {
        //     setPassword(e.target.value)
        // }

        // const onPwCheckHandler = (e) => {
        //     setPwCheck(e.target.value)
        // }
    
        // const onNameHandler = (e) => {
        //     setName(e.target.value)
        // }

        // const onPhoneHandler = (e) => {
        //     setPhone(e.target.value)
        // }

        // const onEmailHandler = (e) => {
        //     setEmail(e.target.value)
        // }

        // 백업
        // const handleSubmit = async (event : any) => {
        //     event.preventDefault();
        //     try {
        //       const { data } = await axios.post(
        //         "http://localhost:8080/smartstore/commerce/usersign",
        //         {
        //           ...values,
        //         },
        //         { withCredentials: true }
        //       );
        //       if (data) {
        //         if (data.errors) {
        //           const { id, password, pwcheck, name, phone, email } = data.errors;
        //           console.log(id)
        //           console.log(password)
        //           } else {
        //           navigate("/");
        //         }
        //       }
        //     } catch (ex) {
        //       console.log(ex);
        //     }
        // };

        const handleSubmit = async (event : any) => {
            event.preventDefault();
            try {
                const { data } = await axios.post(
                    "http://localhost:8080/smartstore/commerce/usersign",
                    {
                    ...values,
                    },
                    { withCredentials: true }
                    );
                    console.log(values)
                if (data) {
                    if (data.errors) {
                        const { id, password, pwcheck, name, phone, email } = data.errors;
                        console.log(id)
                        console.log(password)
                    } else {
                        navigate("/");
                    }
                }
            } catch (ex) {
                console.log(ex);
            }
            };

        const [inputClickNumber, setInputClickNumber] = useState(0);
        const [inputClick, setInputClick] = useState(false);
        const inputRefID = useRef<HTMLDivElement>(null);
        const inputRefPW = useRef<HTMLDivElement>(null);
        const inputRefPW2 = useRef<HTMLDivElement>(null);
        const inputRefName = useRef<HTMLDivElement>(null);
        const inputRefNum = useRef<HTMLDivElement>(null);
        const inputRefEmail = useRef<HTMLDivElement>(null);
        
        const mouseEnter = (e:any) => {
            $(e.target).addClass('input-inner-hover');
            // console.log('들어옴');
        }

        const mouseLeave = (e:any) => {
            $('.input-inner').removeClass('input-inner-hover');
            // console.log('나감');
        }

        const [showdropmenu, setShowdrop] = useState(false);
        const dropmenu = useRef<HTMLDivElement>(null);

            useEffect(() => {
                const clickOutsidePhoneNum = (e : any) => {
        
                // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
                // useRef의 current 값은 선택한 DOM을 말함.
                // 드롭메뉴를 제외한 나머지 공간을 클릭하면 닫히게된다.
        
                if (showdropmenu && dropmenu.current && !dropmenu.current.contains(e.target)) {
                    setShowdrop(false);
                    // console.log('바깥을 눌렀습니다')
                } 
                };
            
                document.addEventListener("mousedown", clickOutsidePhoneNum);
            
                return () => {
                // Cleanup the event listener
                document.removeEventListener("mousedown", clickOutsidePhoneNum);
                };
            }, [showdropmenu]);

            let menuChange = (e: any) => {

                $('.option').removeClass('selected');
                $(e.target).addClass('selected');

                const clone = $(e.target).clone()

                $('.selectize-input').empty()
                $('.selectize-input').append(clone)
                $('.selectize-input').children('.option').attr('class', 'item');

                setShowdrop(false)
            }

            useEffect(()=>{
                showdropmenu == false ? $('.selectize-dropdown-content').children('.option').removeClass('active') : $('.selectize-dropdown-content').children('.selected').addClass('active')
                // 메뉴 파트1 옵션 마우스 올렸을때
                $('.selectize-dropdown-content').on('mouseover', function(e){
                $('.option').removeClass('active');
                $(e.target).addClass('active');
                })
            })
            useEffect(() => {

                const clickOutside = (e : any) => {
        
                // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
                // useRef의 current 값은 선택한 DOM을 말함.
                // 드롭메뉴를 제외한 나머지 공간을 클릭하면 닫히게된다.

                // for(let i = 0; i < inputRef.current.length; i++){
                //     // console.log(inputRef.current[i])
                //     if(inputClick && inputRef.current[0] && !inputRef.current[0].contains(e.target)){
                //         setInputClick(false);
                //         setInputClickNumber(0);
                //         console.log('바깥을 눌렀습니다')
                //     }
                
                // }
                
                if (inputClickNumber == 1 && inputRefID.current && !inputRefID.current.contains(e.target)) {
                    setInputClick(false);
                    setInputClickNumber(0);
                } 
                if (inputClickNumber == 2 && inputRefPW.current && !inputRefPW.current.contains(e.target)) {
                    setInputClick(false);
                    setInputClickNumber(0);
                } 
                if (inputClickNumber == 3 && inputRefPW2.current && !inputRefPW2.current.contains(e.target)) {
                    setInputClick(false);
                    setInputClickNumber(0);
                } 
                if (inputClickNumber == 4 && inputRefName.current && !inputRefName.current.contains(e.target)) {
                    setInputClick(false);
                    setInputClickNumber(0);
                } 
                if (inputClickNumber == 5 && inputRefNum.current && !inputRefNum.current.contains(e.target)) {
                    setInputClick(false);
                    setInputClickNumber(0);
                } 
                if (inputClickNumber == 6 && inputRefEmail.current && !inputRefEmail.current.contains(e.target)) {
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
        <form method='post' onSubmit={(e) => handleSubmit(e)}>
        <div className="usersign-layout-wrap">
            <div className="layout-inner">
                <div className="content">
                    <h2 className="signup-title">네이버 커머스 ID 회원가입</h2>
                    <div className="signup-area">
                        <h3 className="signup-area-title">회원 정보 입력
                            <span className="accent">필수항목</span>
                        </h3>
                        <ul className="signup-list">
                            <li className="signup-item">
                                <div className="signup-id-pc">
                                    <div className="text">
                                        <label className="title">로그인 아이디</label>
                                        <div className="input-item">
                                            <div className="input-area">
                                                <div className="input-box" ref={inputRefID}>
                                                    <div className={ inputClick && inputClickNumber == 1 ? "input-inner input-inner-active" : "input-inner"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
                                                        <input type="text" name="id" placeholder="로그인 아이디" className="input" onClick={() => { setInputClick(true); setInputClickNumber(1);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="input-btn-wrap">
                                                    <button className="input-btn">
                                                        <span className="text">인증</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="error">로그인 아이디를 입력해 주세요.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="signup-item">
                                <div className="signup-id-pc">
                                    <div className="text">
                                        <label className="title">비밀번호</label>
                                        <div className="input-item">
                                            <div className="input-area">
                                                <div className="input-box" ref={inputRefPW}>
                                                    <div className={ inputClick && inputClickNumber == 2 ? "input-inner input-inner-pw input-inner-active" : "input-inner input-inner-pw"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
                                                        <input type="password" name="password" placeholder="비밀번호" className="input" onClick={() => { setInputClick(true); setInputClickNumber(2);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value})}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="error">비밀번호를 입력해 주세요.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="signup-item">
                                <div className="signup-id-pc">
                                    <div className="text">
                                        <label className="title">비밀번호 확인</label>
                                        <div className="input-item">
                                            <div className="input-area">
                                                <div className="input-box" ref={inputRefPW2}>
                                                    <div className={ inputClick && inputClickNumber == 3 ? "input-inner input-inner-pwcheck input-inner-active" : "input-inner input-inner-pwcheck"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
                                                        <input type="password" name="pwcheck" placeholder="비밀번호 확인" className="input" onClick={() => { setInputClick(true); setInputClickNumber(3);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value})}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="error">비밀번호를 다시 한 번 입력해 주세요.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="signup-item">
                                <div className="signup-id-pc">
                                    <div className="text">
                                        <label className="title">이름</label>
                                        <div className="input-item">
                                            <div className="input-area">
                                                <div className="input-box" ref={inputRefName}>
                                                    <div className={ inputClick && inputClickNumber == 4 ? "input-inner input-inner-name input-inner-active" : "input-inner input-inner-name"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
                                                        <input type="text" name="name" placeholder="이름" className="input" onClick={() => { setInputClick(true); setInputClickNumber(4);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value})}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="error">이름을 입력해 주세요.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="signup-item signup-number">
                                <div className="signup-id-pc">
                                    <div className="text">
                                        <label className="title">휴대전화 번호
                                            <img src={`${process.env.PUBLIC_URL}/img/icon-help-16.svg`} alt=" " className="icon-help"/>
                                        </label>
                                        <div className="input-item">
                                            <div className="input-area">
                                                <div className='selectize-control' ref={dropmenu}>
                                                    <div className={showdropmenu ? 'selectize-input check' : 'selectize-input'}  onClick={ () => setShowdrop((e) => !e)}> 
                                                        <div className="item">대한민국(+82)</div>
                                                    </div>
                                                    <div className={showdropmenu ? 'selectize-dropdown dropdown-active' : 'selectize-dropdown'}>
                                                        <div className='selectize-dropdown-content'>
                                                            <div className="option selected" onClick={ menuChange }>대한민국(+82)</div> 
                                                            <div className="option" onClick={ menuChange }>중국(+86)</div> 
                                                            <div className="option" onClick={ menuChange }>미국(+1)</div> 
                                                            <div className="option" onClick={ menuChange }>영국(+44)</div> 
                                                            <div className="option" onClick={ menuChange }>이탈리아(+39)</div> 
                                                            <div className="option" onClick={ menuChange }>독일(+49)</div> 
                                                            <div className="option" onClick={ menuChange }>프랑스(+33)</div> 
                                                            <div className="option" onClick={ menuChange }>일본(+81)</div>
                                                            <div className="option" onClick={ menuChange }>뉴질랜드(+64)</div>
                                                            <div className="option" onClick={ menuChange }>호주(+61)</div>
                                                            <div className="option" onClick={ menuChange }>대만(+886)</div>
                                                            <div className="option" onClick={ menuChange }>홍콩(+852)</div>
                                                            <div className="option" onClick={ menuChange }>싱가폴(+65)</div>
                                                            <div className="option" onClick={ menuChange }>스위스(+41)</div>
                                                            <div className="option" onClick={ menuChange }>캐나다(+1)</div>
                                                            <div className="option" onClick={ menuChange }>아르헨티나(+54)</div>
                                                            <div className="option" onClick={ menuChange }>베트남(+84)</div>
                                                            <div className="option" onClick={ menuChange }>스페인(+34)</div>
                                                            <div className="option" onClick={ menuChange }>인도네시아(+62)</div>
                                                            <div className="option" onClick={ menuChange }>키르키즈스탄(+996)</div>
                                                            <div className="option" onClick={ menuChange }>필리핀(+63)</div>
                                                            <div className="option" onClick={ menuChange }>아일랜드(+353)</div>
                                                            <div className="option" onClick={ menuChange }>핀란드(+358)</div>
                                                            <div className="option" onClick={ menuChange }>스웨덴(+46)</div>
                                                            <div className="option" onClick={ menuChange }>태국(+66)</div>
                                                            <div className="option" onClick={ menuChange }>브라질(+55)</div>
                                                            <div className="option" onClick={ menuChange }>인도(+91)</div>
                                                            <div className="option" onClick={ menuChange }>오스트리아(+43)</div>
                                                            <div className="option" onClick={ menuChange }>스리랑카(+94)</div>
                                                            <div className="option" onClick={ menuChange }>아랍에미레이트(+971)</div>
                                                            <div className="option" onClick={ menuChange }>네덜란드(+31)</div>
                                                            <div className="option" onClick={ menuChange }>폴란드(+48)</div>
                                                            <div className="option" onClick={ menuChange }>세르비아(+381)</div>
                                                            <div className="option" onClick={ menuChange }>벨기에(+32)</div>
                                                            <div className="option" onClick={ menuChange }>슬로베니아(+386)</div>
                                                            <div className="option" onClick={ menuChange }>루마니아(+40)</div>
                                                            <div className="option" onClick={ menuChange }>덴마크(+45)</div>
                                                            <div className="option" onClick={ menuChange }>모로코(+212)</div>
                                                            <div className="option" onClick={ menuChange }>니카라과(+505)</div>
                                                            <div className="option" onClick={ menuChange }>포루투갈(+351)</div>
                                                            <div className="option" onClick={ menuChange }>체코(+420)</div>
                                                            <div className="option" onClick={ menuChange }>사우디아라비아(+966)</div>
                                                            <div className="option" onClick={ menuChange }>쿠웨이트(+965)</div>
                                                            <div className="option" onClick={ menuChange }>요르단(+962)</div>
                                                            <div className="option" onClick={ menuChange }>카타르(+974)</div>
                                                            <div className="option" onClick={ menuChange }>터키(+90)</div>
                                                            <div className="option" onClick={ menuChange }>말레이시아(+60)</div>
                                                            <div className="option" onClick={ menuChange }>불가리아(+359)</div>
                                                            <div className="option" onClick={ menuChange }>마카오(+853)</div>
                                                            <div className="option" onClick={ menuChange }>노르웨이(+47)</div>
                                                            <div className="option" onClick={ menuChange }>헝가리(+36)</div>
                                                            <div className="option" onClick={ menuChange }>과테말라(+502)</div>
                                                            <div className="option" onClick={ menuChange }>베네수엘라(+58)</div>
                                                            <div className="option" onClick={ menuChange }>네팔(+977)</div>
                                                            <div className="option" onClick={ menuChange }>피지(+679)</div>
                                                            <div className="option" onClick={ menuChange }>튀니지(+216)</div>
                                                            <div className="option" onClick={ menuChange }>그리스(+30)</div>
                                                            <div className="option" onClick={ menuChange }>우즈베키스탄(+998)</div>
                                                            <div className="option" onClick={ menuChange }>몰타(+356)</div>
                                                            <div className="option" onClick={ menuChange }>타지키스탄(+992)</div>
                                                            <div className="option" onClick={ menuChange }>파키스탄(+92)</div>
                                                            <div className="option" onClick={ menuChange }>남아프리카공화국(+27)</div>
                                                            <div className="option" onClick={ menuChange }>몽골(+976)</div>
                                                            <div className="option" onClick={ menuChange }>룩셈부르크(+352)</div>
                                                            <div className="option" onClick={ menuChange }>쿠바(+53)</div>
                                                            <div className="option" onClick={ menuChange }>이스라엘(+972)</div>
                                                            <div className="option" onClick={ menuChange }>아제르바이잔(+994)</div>
                                                            <div className="option" onClick={ menuChange }>방글라데시(+880)</div>
                                                            <div className="option" onClick={ menuChange }>페루(+51)</div>
                                                            <div className="option" onClick={ menuChange }>멕시코(+52)</div>
                                                            <div className="option" onClick={ menuChange }>코스타리카(+506)</div>
                                                            <div className="option" onClick={ menuChange }>카자흐스탄(+7)</div>
                                                            <div className="option" onClick={ menuChange }>나이지리아(+234)</div>
                                                            <div className="option" onClick={ menuChange }>에스토니아(+372)</div>
                                                            <div className="option" onClick={ menuChange }>이집트(+20)</div>
                                                            <div className="option" onClick={ menuChange }>콜롬비아(+57)</div>
                                                            <div className="option" onClick={ menuChange }>벨라루스(+375)</div>
                                                            <div className="option" onClick={ menuChange }>미얀마(+95)</div>
                                                            <div className="option" onClick={ menuChange }>파라과이(+595)</div>
                                                            <div className="option" onClick={ menuChange }>캄보디아(+855)</div>
                                                            <div className="option" onClick={ menuChange }>우크라이나(+380)</div>
                                                            <div className="option" onClick={ menuChange }>엘살바도르(+503)</div>
                                                            <div className="option" onClick={ menuChange }>세인트루시아(+1)</div>
                                                            <div className="option" onClick={ menuChange }>리투아니아(+370)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-number-box" ref={inputRefNum}>
                                                    <div className={ inputClick && inputClickNumber == 5 ? "input-inner input-inner-active" : "input-inner"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
                                                        <input type="text" name="phone" placeholder="휴대전화 번호" className="input" onClick={() => { setInputClick(true); setInputClickNumber(5);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="input-btn-wrap">
                                                    <button className="input-btn">
                                                        <span className="text">인증</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="error">이름을 입력해 주세요.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="signup-item">
                                <div className="signup-id-pc">
                                    <div className="text">
                                        <label className="title">본인확인 이메일
                                            <img src={`${process.env.PUBLIC_URL}/img/icon-help-16.svg`} alt=" " className="icon-help"/>
                                        </label>
                                        <div className="input-item">
                                            <div className="input-area">
                                                <div className="input-box" ref={inputRefEmail}>
                                                    <div className={ inputClick && inputClickNumber == 6 ? "input-inner input-inner-active" : "input-inner"} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
                                                        <input type="text" name="email" placeholder="본인확인 이메일" className="input" onClick={() => { setInputClick(true); setInputClickNumber(6);}} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="input-btn-wrap">
                                                    <button className="input-btn">
                                                        <span className="text">인증</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="error">로그인 아이디를 입력해 주세요.</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="agree-area">
                        <h3 className="agree-title">약관 동의</h3>
                        <ul className="agree-check-list">
                            <li className="agree-check-item">
                                <input type="checkbox" className="blind" id="checkbox01"/>
                                <label className="agree-check-box" htmlFor="checkbox01">
                                    <span className="agree-ico-box"></span>
                                    <img src={`${process.env.PUBLIC_URL}/img/icon-check-16.00020358.svg`} alt=" " className="agree-ico"/>
                                </label>
                                <div className="agree-desc">
                                    <a href="">
                                        <span className="agree-txt">개인정보 수집 및 이용</span>
                                    </a>
                                    에 동의합니다.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-area">
                        <button type="submit" className="btn-area-btn">
                            <span className="btn-txt">가입</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </>
    );
    }

    export default Usersign;
