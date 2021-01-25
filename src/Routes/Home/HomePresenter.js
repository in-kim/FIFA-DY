import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  padding:30px;
`;
const Logo = styled.div`
  position:absolute;
  right:0;
  bottom:0;
  width:320px;  
  height:320px;
  background:url(${props => props.logoImage}) no-repeat center;
  background-size:320px;
  opacity:0.2;
`;
const Cover = styled.div`
  width:100%;
  flex:0 0 300px;
  max-height:300px;
  background:url(${props => props.bgImage}) no-repeat center;
  background-size:300px;
`;

const Form = styled.form`
  position:relative;
  width:320px;
  flex:0 0 43px;
  margin:10px auto 0 auto;
`;

const Input = styled.input`
  all:unset;
  width:320px;
  font-size:20px;
  background-color:#222;
  padding:0 10px 15px 10px;
  border-bottom:5px solid #fff;
  box-sizing:border-box;
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
  max-height:480px;
  padding-top:4px;
  overflow:auto;
`;
const MacthContainer = styled.div`
  width:80%;
  flex:unset;
  margin:30px auto 0 auto;
  padding:20px;
  background-color:#ecf0f1;
  border-radius:5px;
  box-shadow:-1px -1px 11px 0px rgba(255, 255, 255, 0.3);
  color:#34495e;
  text-align:center;
`;
const MacthHeader = styled.div`
  display:flex;
`;
const HeaderItem = styled.span`
  flex:1;
  padding-bottom:5px;
  border-bottom:3px solid #34495e;
  margin-bottom:20px;
`;
const MacthItem = styled.div`
  display:flex;
  align-items:center;
  
  &:not(:last-child){
    margin-bottom:30px;
  }
`;
const Name = styled.span`
  flex:1; 
  color:#9b59b6;
`;
const Score = styled.span`flex:1; font-size:18px;`;
const Date = styled.span`flex:1;`;
const MacthResult = styled.span`
  flex:1;
  color:${props => props.color};
`;
const DetailButton = styled.span`
  font-size:14px;
  padding:5px;
  border:1px solid #34495e;
  border-radius:5px;
  margin:0 10px;
`;

const MoreButton = styled.button`
  width:100%;
  height:29px;
  font-family:'SDKukdetopokki';
  font-size:15px;
  color:#130f40;
  text-align:center;
  border:0;
  cursor:pointer;
  outline:none;
  
  &:hover{
    font-size:1.3rem;
    transition:.3s;
  }
`;

const HomePrecenter = ({
  list, 
  searchTerm, 
  handleSubmit,
  updateTerm, 
  UpdateOffset,
  offset,
  error, 
  loading
}) => (
  <Container>
    <Logo logoImage={`${process.env.REACT_APP_URL}/assets/image/logo.png`} />
    <Cover bgImage="https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p101000250.png"></Cover>
    <Form onSubmit={handleSubmit}>
      <Input 
        placeholder="구단주명을 입력하세요."
        value={searchTerm}
        onChange={updateTerm}
      />
      <SearchButton searchIcon={`${process.env.REACT_APP_URL}/assets/image/button/btn-search.png`}></SearchButton>
    </Form>

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
            loading ? '로딩중 입니다.' :
            list && list.length > 0 ? list.map(match => (
              <MacthItem key={match.matchId}>
                <Date>{match.matchDate.substring(0,10)}</Date>
                <Name>{match.myNickName}</Name>
                <Score>
                  {match.myScore}
                  <DetailButton>
                    <Link to={`/detail/${match.myNickName}/${match.matchId}/${offset}`}>
                      자세히 보기
                    </Link>
                  </DetailButton>
                  {match.enemyScore}
                </Score>
                <Name>{match.enemyNickName}</Name>
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

        {
          list && list.length > 0 && <MoreButton onClick={UpdateOffset}>더보기</MoreButton>
        }
      </Scroll>
    </MacthContainer>
  </Container>
)

HomePrecenter.propTypes = {
  list:PropTypes.array,
  searchTerm:PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
  updateTerm:PropTypes.func.isRequired,
  UpdateOffset:PropTypes.func.isRequired,
  offset:PropTypes.number,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.string
}

export default HomePrecenter;