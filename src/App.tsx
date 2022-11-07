import './App.css';
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Accordion from "./components/Accordion";
import Home from "./components/Home";
import Test from "./components/Test";
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import { Search, Stack } from 'react-bootstrap-icons';


function App() {

    const [showdropmenu, setShowdrop] = useState(false);
    const dropmenu = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const clickOutside = (e : any) => {

        // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
        // useRef의 current 값은 선택한 DOM을 말함.
        // 드롭메뉴를 제외한 나머지 공간을 클릭하면 닫히게된다.

        if (showdropmenu && dropmenu.current && !dropmenu.current.contains(e.target)) {
          setShowdrop(false);
          // console.log('바깥을 눌렀습니다')
        } 
      };
  
      document.addEventListener("mousedown", clickOutside);
  
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", clickOutside);
      };
    }, [showdropmenu]);

  const contents1 = (
    <div className='contents'>
      <li>상품 조회/수정</li>
      <li>상품 등록</li>
      <li>상품 일괄등록</li>
      <li>상품 카탈로그 가격관리</li>
      <li>연관상품 관리</li>
      <li>사진 보관함</li>
      <li>배송정보 관리</li>
      <li>템플릿 관리</li>
      <li>공지사항 관리</li>
      <li>구독 관리</li>
    </div>
  );
  const contents2 = (
    <div className='contents'>
      <li>선물 수락대기</li>
      <li>미결제 확인</li>
      <li>발주(주문)확인/발송관리</li>
      <li>배송현황 관리</li>
      <li>구매확정 내역</li>
      <li>취소 관리</li>
      <li>반품 관리</li>
      <li>교환 관리</li>
      <li>판매방해 고객관리</li>
      <li>반품안심케어</li>
    </div>
  );
  const contents3 = (
    <div className='contents'>
      <li>정산 내역(일별/건별)</li>
      <li>항목별 정산 내역</li>
      <li>빠른정산</li>
      <li>부가세신고 내역</li>
      <li>세금계산서 조회</li>
      <li>충전금 관리</li>
      <li>초보판매자 정산가이드</li>
    </div>
  )
  const contents4 = (
    <div className='contents'>
      <li>문의 관리</li>
      <li>고객문의 관리</li>
      <li>리뷰 관리</li>
      <li>리뷰이벤트 관리</li>
    </div>
  )
  const contents5 = (
    <div className='contents'>
      <li>톡톡 상담하기</li>
      <li>톡톡 쇼핑챗봇/AI FAQ 설정</li>
    </div>
  )
  const contents6 = (
    <div className="contents">
      <li>스마트스토어</li>
      <li>카테고리 관리</li>
      <li>쇼핑 스토리 관리</li>
      <li>라이브 예고 페이지 관리</li>
      <li>스토어 관리</li>
      <li>CLOVA MD 상품추천</li>
    </div>
  );
  const contents7 = (
    <div className="contents">
      <li>쇼핑윈도 노출 제안</li>
      <li>기획전 관리</li>
      <li>럭키투데이 제안 관리</li>
      <li>노출 서비스 관리</li>
    </div>
  );
  const contents8 = (
    <div className="contents">
      <li>혜택 등록</li>
      <li>혜택 조회/수정</li>
      <li>혜택 리포트</li>
      <li>고객등급 관리</li>
      <li>포인트 지급내역 조회</li>
    </div>
  );
  const contents9 = (
    <div className="contents">
      <li>마케팅 보내기</li>
      <li>마케팅 이력</li>
      <li>마케팅 통계</li>
    </div>
  );
  const contents10 = (
    <div className="contents">
      <li>솔루션 목록</li>
    </div>
  );
  const contents11 = (
    <div className="contents">
      <li>요약</li>
      <li>판매분석</li>
      <li>마케팅분석</li>
      <li>쇼핑행동분석</li>
      <li>시장벤치마크</li>
      <li>판매성과예측</li>
      <li>고객현황</li>
      <li>재구매통계</li>
    </div>
  );
  const contents12 = (
    <div className="contents">
      <li>탑탑 소개</li>
      <li>탑탑 리포트</li>
      <li>탑탑 입점 제안</li>
    </div>
  );
  const contents13 = (
    <div className="contents">
      <li>원쁠딜 소개</li>
      <li>제안 관리</li>
      <li>공지/FAQ</li>
    </div>
  );
  const contents14 = (
    <div className="contents">
      <li>판매자지원프로그램</li>
    </div>
  );
  const contents15 = (
    <div className="contents">
      <li>판매자 정보</li>
      <li>정보변경 신청</li>
      <li>상품판매권한 신청</li>
      <li>심사내역 조회</li>
      <li>판매자 등급</li>
      <li>매니저 관리</li>
    </div>
  );
  const contents16 = (
    <div className="contents">
      <li>지식재산권 침해관리</li>
    </div>
  );
  const contents17 = (
    <div className="contents">
      <li>풀필먼트 서비스신청</li>
    </div>
  );
  const contents18 = (
    <div className="contents">
      <li>공지 사항</li>
    </div>
  );

    const [menuclick, setMenuclick] = useState(false);
    

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


  let navigate = useNavigate(); // 다른 페이지로 이동히게 해주는 Hook 입니당. 25줄 참고.
  return (
    
    <div className="App">
        <div className="navi">
          <div className="nav-left">
            <span onClick={() => { navigate("/home")}}>스마트스토어센터</span>
            <span>쇼핑파트너센터</span>
            <span>커머스솔루션마켓</span>
            <span>네이버광고</span>
          </div>
          <div className="nav-right">
            <span>아이디 및 내정보</span>
            <span>로그아웃</span>
            <span>도움말</span>
            <span>톡톡상담</span>
          </div>
        </div>
        <div className="main-menu">
          <div className="menu-store">
            <a>
              <span className='thumb'>
                <img src="../img/cat.jpeg" alt="abc" className='img-circle'/>
              </span>
              <span className='shopname'>포트폴리오</span>
              </a>
          </div>
          <div className='order-check'>
            <form className='test'>
              <div className='selectize-control' ref={dropmenu}>
                <div className={showdropmenu ? 'selectize-input check' : 'selectize-input'}  onClick={ () => setShowdrop((e) => !e)}> 
                  <div data-value="COLLECTOR_name" className="item">수취인명</div> 
                </div>
                <div className={showdropmenu ? 'selectize-dropdown dropdown-active' : 'selectize-dropdown'}>
                  <div className='selectize-dropdown-content'>
                      <div data-value="COLLECTOR_name" className="option selected" onClick={ menuChange }>수취인명</div> 
                      <div data-value="PURCHACER_NAME" className="option" onClick={ menuChange }>구매자명</div> 
                      <div data-value="PURCHACER_TEL_NO" className="option" onClick={ menuChange }>구매자연락처</div> 
                      <div data-value="PURCHACER_ID" className="option" onClick={ menuChange }>구매자ID</div> 
                      <div data-value="ORDER_NO" className="option" onClick={ menuChange }>주문번호</div> 
                      <div data-value="PRODUCT_ORDER_NO" className="option" onClick={ menuChange }>상품주문번호</div> 
                      <div data-value="PRODUCT_NO" className="option" onClick={ menuChange }>상품번호</div> 
                      <div data-value="INVOICE_NO" className="option" onClick={ menuChange }>운송장번호</div>
                  </div>
                </div>
              </div>
              <div className='seller-input-wrap'>
                <input className='seller-input'></input>
                <button className='seller-input-Btn'>
                  {/* <Search className='search-icon'/> */}
                  <i className="fn fn-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="side-menu">
            <div className='menu-list'>
              <Accordion title="상품관리" className="list list-01" contents={contents1}/>
              <Accordion title="판매관리 " className="list icon-npay" contents={contents2}/>
              <Accordion title="정산관리 " className="list icon-npay" contents={contents3}/>
              <Accordion title="문의/리뷰관리" className="list list-04" contents={contents4}/>
              <Accordion title="톡톡상담관리 " className="fn list talktalk-icon" contents={contents5}/>
              <Accordion title="스토어 전시관리 " className="list list-06 label-new" contents={contents6}/>
              <Accordion title="노출관리" className="list list-07" contents={contents7}/>
              <Accordion title="고객혜택관리" className="list list-08" contents={contents8}/>
              <Accordion title="마케팅메세지" className="list list-09" contents={contents9}/>
              <Accordion title="커머스솔루션" className="list list-10 icon-beta label-new" contents={contents10}/>
              <Accordion title="통계 " className="list list-11 label-new" contents={contents11}/>
              <Accordion title="탑탑" className="list list-12" contents={contents12}/>
              <Accordion title="원쁠딜 " className="list list-13 label-new" contents={contents13}/>
              <Accordion title="판매자지원프로그램" className="list list-14" contents={contents14}/>
              <Accordion title="판매자정보" className="list list-15" contents={contents15}/>
              <Accordion title="지식재산권침해관리" className="list list-16" contents={contents16}/>
              <Accordion title="물류 관리 " className="list list-17 label-new" contents={contents17}/>
              <Accordion title="공지사항" className="list list-18" contents={contents18}/>
            </div>
            <div className='outer_link'>
                <h2 className='title'>교육 프로그램 바로가기</h2>
                  <div className='outer_menu'>
                    <a className='link'>온라인 교육
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                    <a  className='link'>쇼핑 라이브 교육
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                  </div>
                <h2 className='title'>네이버 비즈니스 금융센터</h2>
                  <div className='outer_menu'>
                    <a className='link'>정책지원금
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                    <a className='link'>빠른정산
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                    <a className='link'>사업자 대출
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                    <a className='link'>사업자 보험
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                  </div>
                <h2 className='title'>공식 블로그 바로가기</h2>
                  <div className='outer_menu'>
                    <a className='link'>네이버쇼핑 파트너
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                    <a className='link'>쇼핑윈도
                      <i className="fn-booking fn-booking-newlayer" aria-hidden="true"></i>
                    </a>
                  </div>
            </div> 
              <div className="talktalk_Btn_wrap">
                <button className="fn talktalk_Btn">톡톡상담</button>
              </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/abc/*" element={<Test/>}></Route>
        </Routes>
    </div>
  );
}


export default App;
