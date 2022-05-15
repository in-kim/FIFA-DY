import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from 'styled-components';

import SearchForm from '../../Components/Home/SearchForm'
import MacthList from '../../Components/Home/MacthList';
import UserInfo from "../../Components/Home/UserInfo";
import UserInfoPop from '../../Components/Home/UserInfoPop'

import Advertisement from "../../Components/Advertisement";
import SideMenu from "../../Components/SideMenu";
import TopRank from '../../Components/TopRank';

import Footer from '../../Components/Footer';

const Home = () => {
  const [dropId,setDropId] = useState("");
  const [isModal, setIsModal] = useState(true);
  const ref = useRef(null);

  // 드랍다운 메뉴 
  const dropMenu = useCallback(() => {
    let target = document.getElementById(dropId);
    if(target.classList.contains('active') === false){
      target.classList.add("active");
    }else{
      target.classList.remove("active");
      setDropId("");
    }
  },[dropId])

  useEffect(() => {
    let target = ref.current;

    if(dropId){
      dropMenu()
      target.addEventListener('click', dropMenu);
    }

    return () => {
      target.removeEventListener('click',dropMenu);
    }
  },[dropMenu, dropId])
  return (
    <Container ref={ref}>
      <ContainerBox>
        {/* 광고 */}
        <Advertisement />
        {/* menu */}
        {/* <SideMenu /> */}
        {/* 메인 로고 */}
        <Cover bgImage="/assets/image/page_logo.png"></Cover>
        {/* 검색 */}
        <SearchForm />
        {/* 유저 정보 */}
        <UserInfo />
        {/* 전적 리스트 */}
        <MacthList setDropId={setDropId} />
      </ContainerBox>
      <UserInfoPop />
      {/* 팀 로고 */}
      <Logo logoImage={`/assets/image/logo.png`} />
      {/* ranking */}
      {/* <TopRank /> */}

      {
        isModal && (
          <Modal onClick={() => setIsModal(false)}>
            <div>
              <p>🚧 공사중 🚧</p>
              <p>Coming soon~ </p>
            </div>
          </Modal>
        )
      }

      <Footer />
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:100%;
`;

const ContainerBox = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  width:1024px;
  height:100%;
  margin:0 auto;
  box-sizing:border-box;
  padding-top:50px;

  @media only screen and (max-width:1024px){
    width:100%;
    padding:30px 15px;
  }
`;

const Cover = styled.div`
  width:100%;
  flex:0 0 250px;
  max-height:250px;
  background:url(${props => props.bgImage}) no-repeat center;
  background-size:400px;

  @media only screen and (max-width:500px){
    max-height: 140px;
    background-size:250px;
    margin-bottom:10px;
  }
`;

const Logo = styled.div`
  position:absolute;
  right:0;
  bottom:0;
  width:300px;
  height:230px;  
  background:url(${props => props.logoImage}) no-repeat center;
  background-size:300px;
  opacity:0.2;

  @media only screen and (max-width:500px){
    width:320px;
    height:auto;
  }
`;

const Modal = styled.div`
  position:absolute; left:0; top:0; z-index: 99999;
  display: flex; align-items: center; justify-content: center;
  width:100%; height:100%;

  background-color: rgb(0 0 0/.2);
  backdrop-filter: blur(10px);

  & > div{
    font-size:50px; color:#000;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
    background: #fff;

    border-radius: 15px;
    padding:50px;

    & > p{
      text-align: center;

      &:first-child{
        margin-bottom: 30px;
      }
    }
  }
`

export default Home