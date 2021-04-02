import React, {Compoennt, Component} from 'react';
import { observer, inject } from "mobx-react";
import styled from 'styled-components';

import Loading from '../../Components/Loding';

@inject('search')
@observer
class MacthList extends Component{
  render(){
    const { 
      search:{
        error, loading, macthList, searchTerm, UpdateOffset
      } 
    } = this.props;

    console.log('맞아?',macthList);
    console.log('error',error);
    console.log('loading',loading);
    console.log('macthList',macthList);
    return(
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
              macthList && macthList.length > 0 ? macthList.map(match => (
                <MacthItem key={match.matchId}>
                  <Date>{match.matchDate.substring(0,10)}</Date>
                  <Name /*onClick={() => {loadUserClubData(match.myAccessId)}}*/>{match.myNickName}</Name>
                  <Score>
                    {match.myScore}
                    <DetailButton onClick={() => window.open(`/#/detail/${searchTerm}/${match.matchId}`,'_blank')}>
                        자세히 보기
                    </DetailButton>
                    {match.enemyScore}
                  </Score>
                  {/* <DropboxContainer>
                    <Name onClick={() => setDropId(match.matchId)}>
                      {match.enemyNickName}
                    </Name>
                    <Dropbox id={match.matchId}>
                      <DropItem onClick={() => {handleRecordUpdate(match.enemyNickName)}}>전적검색</DropItem>
                      <DropItem onClick={() => {loadUserClubData(match.enemyAccessId)}}>정보보기</DropItem>
                    </Dropbox>
                  </DropboxContainer> */}
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
          macthList && macthList.length > 0 && <MoreButton onClick={UpdateOffset}>더보기</MoreButton>
        }
      </MacthContainer>
    )
  }
}

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
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  cursor:pointer;
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

const Scroll = styled.div`
  max-height:400px;
  padding-top:4px;
  overflow:auto;

  @media only screen and (max-width:500px){
    max-height:200px;
  }
`;

export default MacthList;