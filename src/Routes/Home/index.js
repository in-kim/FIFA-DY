import React from 'react';
import styled from 'styled-components';

import HomeContainer from 'Routes/Home/HomeContainer';
import SearchForm from 'Routes/Home/SearchForm'

import Advertisement from "../../Components/Advertisement";
import SideMenu from "../../Components/SideMenu";

import Footer from '../../Components/Footer';
import MacthList from './MacthList';

const Home = () => {
  return (
    <Container>
      <ContainerBox>
        {/* 광고 */}
        <Advertisement />
        {/* menu */}
        <SideMenu />
        {/* 메인 로고 */}
        <Cover bgImage="/assets/image/page_logo.png"></Cover>
        {/* 검색 */}
        <SearchForm />
        {/* 전적 리스트 */}
        <MacthList />
      </ContainerBox>
      {/* 팀 로고 */}
      <Logo logoImage={`/assets/image/logo.png`} />
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

export default Home