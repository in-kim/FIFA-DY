import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Player = ({bgImage, item, positionId}) => {
  const {
    spPosition, positionDescription:positionName,
    name, originalName,
    spGrade,
    status
  } = item;
  console.log(item)
  return(
    <Container
      top={
          spPosition === 0 ? 'top: 45%' :
          spPosition === 1 ? 'top: 45%' :
          spPosition === 2 ? 'bottom: 4%' :
          spPosition === 3 ? 'bottom: 10%' :
          spPosition === 4 ? 'bottom: 30%' :
          spPosition === 5 ? 'top: 45%' :
          spPosition === 6 ? 'top: 30%' :
          spPosition === 7 ? 'top: 10%' :
          spPosition === 8 ? 'top: 4%' :
          spPosition === 9 ? 'bottom:30%' :
          spPosition === 10 ? 'bottom:45%' :
          spPosition === 11 ? 'top:30%' :
          spPosition === 12 ? 'top:10%' :
          spPosition === 13 ? 'top:30%' :
          spPosition === 14 ? 'top:45%' :
          spPosition === 15 ? 'bottom:30%' :
          spPosition === 16 ? 'bottom:10%' :
          spPosition === 17 ? 'top:30%' :
          spPosition === 18 ? 'top:45%' :
          spPosition === 19 ? 'bottom:30%' :
          spPosition === 20 ? 'top:30%' :
          spPosition === 21 ? 'top:45%' :
          spPosition === 22 ? 'bottom:30%' :
          spPosition === 23 ? 'top:10%' :
          spPosition === 24 ? 'top:30%' :
          spPosition === 25 ? 'top:45%' :
          spPosition === 26 ? 'bottom:30%' :
          spPosition === 27 ? 'bottom:10%' : ''
      }
    >
      <Image bgImage={bgImage}>
        <Grade 
          bgColor={
            spGrade === 1 ? "#45494f" : 
            spGrade > 4 && spGrade < 8? "#c2c5ca" : 
            spGrade > 7 ? "#e8c337" : "#c37653"
          }
        >+ {spGrade}</Grade>
      </Image>
      <Position bgColor={
          positionId === "GK" ? '#e9a216' : 
          positionId === "D" ? '#1476ff' :
          positionId === "M" ? '#03cd7a' : '#f6425f'
      }>
        {positionName}
      </Position>
      <Name>{name}</Name>
  
        {
          status && (
            <InfoPopup>
              <InfoContainer>
                <InfoTitle>{originalName}</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>평점</InfoItem>
                <InfoItem>⭐️{status.spRating}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>어시스트</InfoItem>
                <InfoItem>{status.block}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>수비성공</InfoItem>
                <InfoItem>{status.block}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>드리블성공</InfoItem>
                <InfoItem>{status.dribble}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>유효슈팅</InfoItem>
                <InfoItem>{status.effectiveShoot}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>골</InfoItem>
                <InfoItem>{status.goal}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>슈팅횟수</InfoItem>
                <InfoItem>{status.shoot}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>패스시도</InfoItem>
                <InfoItem>{status.passTry}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>패스성공</InfoItem>
                <InfoItem>{status.passSuccess}</InfoItem>
              </InfoContainer>
              <InfoContainer>
                <InfoItem>태클성공</InfoItem>
                <InfoItem>{status.tackle}</InfoItem>
              </InfoContainer>
            </InfoPopup>
        )
      }
    </Container>
  )
}

Player.propTypes = {
  bgImage:PropTypes.string,
  item:PropTypes.object,
  positionId:PropTypes.string,
}

export default Player;

const InfoPopup = styled.div`
  display:none;
  position:absolute;
  top:0;
  left:0;
  transform:translateX(-100%);
  width:250px;
  height:auto;
  z-index:2;
  background-color:rgba(0,0,0,0.8);
  padding:10px;
`;
const InfoContainer = styled.span`
  display:flex;
  align-items:center;
  margin-bottom:10px;
`;
const InfoItem = styled.span`
  flex:1;
  text-align:left;
  font-size:12px;
  color:#fff;
  text-align:center;

  &:nth-child(1){
    text-align:left;
  }
`;

const InfoTitle = styled.span`
  flex:1;
  text-align:center;
  font-size:15px;
  font-weight:700;
  color:#fff;
`;

const Container = styled.div`
  position:absolute;
  ${ props=> props.top };
  left:50%;
  transform:translateX(-50%);

  &:hover{
    ${InfoPopup}{
      display:block;
    }
  }
`;
const Image = styled.span`
  position:relative;
  display:block;
  width:40px;
  height:40px;
  border:1px solid #222;
  border-radius:50%;
  background:url(${props=> props.bgImage}) no-repeat center #fff;
  background-size:cover;
  margin:0 auto 5px auto;
`;
const Grade = styled.span`
  position:absolute;
  top:0;
  right:-30px;
  width:25px;
  font-size: 10px;
  line-height:10px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
  background-color:${props=> props.bgColor};
  padding:2px 5px;
  text-align:center;
`;
const Name = styled.span`
  display:block;
  font-size:10px;
  color:#fff;
  text-align:center;
  background-color:#2c3e50;
  padding:3px;
  border-radius:0 3px 3px 0;
`;
const Position = styled.span`
  display:block;
  font-size:10px;
  padding:3px;
  color:#fff;
  background-color:${props=> props.bgColor};
  border-radius:3px 0 0 3px;
  text-align:center;
`;