import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Footer from 'Components/Footer'
import Loading from "Components/Loding";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:1024px;
  height:100%;
  margin:0 auto;
  box-sizing:border-box;
  @media only screen and (max-width:1024px){
    width:100%;
    padding:30px 15px;
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

const Form = styled.form`
  position:relative;
  width:350px;
  flex:0 0 43px;
  margin:10px auto 0 auto;

  @media only screen and (max-width:500px){
    width:100%;
  }
`;

const Input = styled.input`
  all:unset;
  width:350px;
  font-size:20px;
  background-color:#222;
  padding:0 10px 15px 10px;
  border-bottom:5px solid #fff;
  box-sizing:border-box;

  @media only screen and (max-width:500px){
    width:100%;
    padding:0 10px 10px 10px;
    border-bottom:1px solid #fff;
  }
`;

const SearchButton = styled.button`
  position:absolute;
  right:0;
  top:5px;
  width:20px;
  height:20px;
  background:url(${props=>props.searchIcon}) no-repeat;
  background-size:cover;
  border:0;
  cursor:pointer;
`;
const Scroll = styled.div`
  max-height:400px;
  padding-top:4px;
  overflow:auto;

  @media only screen and (max-width:500px){
    max-height:200px;
  }
`;
const MacthContainer = styled.div`
  position:relative;
  width:100%;
  flex:unset;
  margin:20px auto 0 auto;
  padding:20px;
  background-color:#ecf0f1;
  border-radius:5px;
  box-shadow:-1px -1px 11px 0px rgba(255, 255, 255, 0.3);
  color:#34495e;
  text-align:center;
  z-index:1;

  @media only screen and (max-width:500px){
    margin:10px auto 0 auto;
    padding:10px;
  }
`;
const MacthHeader = styled.div`
  display:flex;
`;
const HeaderItem = styled.span`
  flex:1;
  padding-bottom:5px;
  border-bottom:3px solid #34495e;
  margin-bottom:20px;

  @media only screen and (max-width:500px){
    &:first-child{
      flex:0 0 50px;
      max-width:50px;
    }
    &:last-child{display:none;}
    margin-bottom:10px;
  }
`;
const MacthItem = styled.div`
  display:flex;
  align-items:center;
  min-height:30px;
  
  &:not(:last-child){
    margin-bottom:10px;

    @media only screen and (max-width:500px){
      margin-bottom:10px;
    }
  }
`;
const Name = styled.span`
  flex:1; 
  color:#9b59b6;

  @media only screen and (max-width:500px){
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
`;
const Score = styled.span`flex:1; font-size:18px;`;
const Date = styled.span`
  flex:1;
  @media only screen and (max-width:500px){
    flex:0 0 50px;
    max-width:50px;
    font-size:11px;
  }
`;
const MacthResult = styled.span`
  flex:1;
  color:${props => props.color};
  @media only screen and (max-width:500px){
    display:none;
  }
`;
const DetailButton = styled.a`
  font-size:14px;
  padding:5px;
  border:1px solid #34495e;
  border-radius:5px;
  margin:0 10px;
  cursor:pointer;

  @media only screen and (max-width:500px){
    font-size:10px;
    min-width:50px;
    border:0;
    border-bottom:1px solid #34495e;
    border-radius:unset;
    padding:0;
    vertical-align:middle;
  }
`;

const MoreButton = styled.button`
  width:100%;
  height:29px;
  font-family:'Bazzi';
  font-size:15px;
  color:#130f40;
  text-align:center;
  border:0;
  cursor:pointer;
  outline:none;
  margin-top:20px;
  background-color:transparent;
  
  @media only screen and (min-width:768px){
    &:hover{
      font-size:1.3rem;
      transition:.3s;
    }
  }

  @media only screen and (max-width:500px){
    height:18px;
    margin-top:10px;
  }
`;

const UserInfoContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  margin:20px auto 0 auto;

  @media only screen and (max-width:768px){
    box-shadow:-1px -1px 11px 0px rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width:500px){
    position:relative;
    margin:10px auto 0 auto;
    padding-top:100px;
  }
`;

const UserInfoItem = styled.div`
  flex:1;
  margin-left:20px;
  &:first-child {
    margin-left:0;
    background-color:rgba(255,255,255,0.8);
    color:#222;

    @media only screen and (max-width:768px){
      position:absolute;
      top:0;
      left:0;
      display:flex;
      flex-direction:row;
      align-items:center;
      width:100%;
      padding-top:40px;
    }
  };
  background-color:rgba(0,0,0,0.2);
  border-radius:5px;
  box-shadow:-1px -1px 11px 0px rgba(255, 255, 255, 0.3);
  padding:10px;
  color:#fff;

  @media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    margin:0;
    box-shadow:unset;
  }
`;

const UserInfoTitle = styled.span`
  display:block;
  font-size:20px;
  text-align:center;
  margin-bottom:20px;
  ${
    props => props.userInfo ? 
    'background-color:#000; color:#fff;' :
    'background-color:#fff; color:#222;' 
  }
  
  padding:10px 0;
  border-radius:12px;
  @media only screen and (max-width:768px){
    margin-bottom:10px;
    text-align:center;
  }
  @media only screen and (max-width:500px){
    font-size:12px;

    ${
      props => props.userInfo && 
      `
        position:absolute; 
        top:0; 
        left:0;
        width:100%;
        border-radius:0;
      `
    }
  }
`;
const UserInfoText = styled.span`
  display:flex;
  font-size:15px;
  margin-bottom:10px;
  &:last-child{margin-bottom:0;}

  @media only screen and (max-width:500px){
    ${props => props.userInfo && 
      `
        display:block;
        flex:1;
        margin-bottom:0;
        text-align:center;
      `
    }
  }
`;

const UserInfoSubTitle = styled.span`
  display:inline-block;
  flex:0 0 60px;

  @media only screen and (max-width:500px){
    ${props => props.userInfo && `
        display:inline-block;
        padding:5px 10px;
        background-color:#000;
        color:#fff;
        border-radius:5px;
    `}
  }
`;
const UserInfoReulst = styled.span`
  flex:1;
  max-width:100%;

  @media only screen and (max-width:500px){
    ${props => props.userInfo && `
      display:block;
      margin-top:10px;
    `}
  }

  &.big {
    display:block;
    font-size:50px;
    text-align:center;

    @media only screen and (max-width:768px){
      display:flex;
      align-items:center;
      justify-content:center;
      flex:1;
      font-size:30px;
    }
  }
`;

const HomePrecenter = ({
  list,
  userInfo,
  level, 
  searchTerm, 
  searchNick,
  handleSubmit,
  handleRecordUpdate,
  updateTerm, 
  UpdateOffset,
  error, 
  loading
}) => (
  <Container>
    <Logo logoImage={`/assets/image/logo.png`} />
    <Cover bgImage="/assets/image/page_logo.png"></Cover>
    <Form onSubmit={handleSubmit}>
      <Input 
        placeholder="구단주명을 입력하세요."
        value={searchTerm}
        onChange={updateTerm}
      />
      <SearchButton searchIcon={`/assets/image/button/btn-search.png`}></SearchButton>
    </Form>
    {
      list && Object.keys(list).length > 0 && 
      <UserInfoContainer>
        <UserInfoItem>
          <UserInfoTitle userInfo={true}>{searchNick==="" ? "닉네임":searchNick}</UserInfoTitle>
          <UserInfoText userInfo={true}>
            <UserInfoSubTitle userInfo={true}>레벨</UserInfoSubTitle>
            <UserInfoReulst userInfo={true}>{level}</UserInfoReulst>
          </UserInfoText>
          <UserInfoText userInfo={true}>
            <UserInfoSubTitle userInfo={true}>최고 등급</UserInfoSubTitle>
            <UserInfoReulst userInfo={true}>{userInfo.maxDivision}</UserInfoReulst>
          </UserInfoText>
          <UserInfoText userInfo={true}>
            <UserInfoSubTitle userInfo={true}>등급 달성일</UserInfoSubTitle>
            <UserInfoReulst userInfo={true}>{userInfo.achieveMaxDivisionDate.substring(0,10)}</UserInfoReulst>
          </UserInfoText>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>10경기 평균 점유율</UserInfoTitle>
          <UserInfoReulst className="big">{userInfo.possessionRatio} %</UserInfoReulst>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>10경기 헤딩 슈팅 비율</UserInfoTitle>
          <UserInfoReulst className="big">{userInfo.headerShootRatio} %</UserInfoReulst>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>10경기 중거리 슈팅 비율</UserInfoTitle>
          <UserInfoReulst className="big">{userInfo.midRangeShootRatio} %</UserInfoReulst>
        </UserInfoItem>
      </UserInfoContainer>
    }

    <MacthContainer>
      <MacthHeader>
        <HeaderItem>매치일시</HeaderItem>
        <HeaderItem>내팀</HeaderItem>
        <HeaderItem>스코어</HeaderItem>
        <HeaderItem>상대팀</HeaderItem>
        <HeaderItem>결과</HeaderItem>
      </MacthHeader>
      <Scroll>
        {
          error && error.length > 0 ? error : 
          (
            loading ? <Loading/> :
            list && list.length > 0 ? list.map(match => (
              <MacthItem key={match.matchId}>
                <Date>{match.matchDate.substring(0,10)}</Date>
                <Name>{match.myNickName}</Name>
                <Score>
                  {match.myScore}
                  <DetailButton onClick={() => window.open(`/#/detail/${searchTerm}/${match.matchId}`,'_blank')}>
                      자세히 보기
                  </DetailButton>
                  {match.enemyScore}
                </Score>
                <Name onClick={handleRecordUpdate}>
                  {match.enemyNickName}
                </Name>
                <MacthResult
                  color={
                    match.gameResult === '승' ? '#3498db' : 
                    match.gameResult === '패' ? '#e74c3c' : '#34495e'
                  }
                >{match.gameResult}</MacthResult>
              </MacthItem>
            )): '검색어를 입력 해주세요.'
          )
        }
      </Scroll>
      {
        list && list.length > 0 && <MoreButton onClick={UpdateOffset}>더보기</MoreButton>
      }
    </MacthContainer>
    <Footer />
  </Container>
)

HomePrecenter.propTypes = {
  list:PropTypes.array,
  accessId:PropTypes.string,
  level:PropTypes.number,
  userInfo:PropTypes.object,
  searchTerm:PropTypes.string,
  searchNick:PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
  handleRecordUpdate:PropTypes.func.isRequired,
  updateTerm:PropTypes.func.isRequired,
  UpdateOffset:PropTypes.func.isRequired,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.string
}

export default HomePrecenter;