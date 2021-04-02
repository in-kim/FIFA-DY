import React, { Component } from 'react';
import styled from "styled-components";
import { eject, observer } from 'mobx-react';

@eject('userInfo')
@observer
class BoxItem extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <UserInfoContainer>
        <UserInfoItem>
          <UserInfoTitle userInfo={true}>
            {userInfo.searchNick==="" ? "닉네임":userInfo.searchNick}
          </UserInfoTitle>
          <UserInfoText userInfo={true}>
            <UserInfoSubTitle userInfo={true}>레벨</UserInfoSubTitle>
            <UserInfoReulst userInfo={true}>{level}</UserInfoReulst>
          </UserInfoText>
          <UserInfoText userInfo={true}>
            <UserInfoSubTitle userInfo={true}>최고 등급</UserInfoSubTitle>
            {/* userInfo?.maxDivision */}
            <UserInfoReulst userInfo={true}>{userInfo ? userInfo.maxDivision : ''}</UserInfoReulst>
          </UserInfoText>
          <UserInfoText userInfo={true}>
            <UserInfoSubTitle userInfo={true}>등급 달성일</UserInfoSubTitle>
            <UserInfoReulst userInfo={true}>{userInfo?.achieveMaxDivisionDate.substring(0,10)}</UserInfoReulst>
          </UserInfoText>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>10경기 평균 점유율</UserInfoTitle>
          <UserInfoReulst className="big">{userInfo?.possessionRatio} %</UserInfoReulst>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>10경기 헤딩 슈팅 비율</UserInfoTitle>
          <UserInfoReulst className="big">{userInfo?.headerShootRatio} %</UserInfoReulst>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>10경기 중거리 슈팅 비율</UserInfoTitle>
          <UserInfoReulst className="big">{userInfo?.midRangeShootRatio} %</UserInfoReulst>
        </UserInfoItem>
      </UserInfoContainer>
    );
  }
}

export default BoxItem

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