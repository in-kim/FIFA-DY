import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position:absolute;
  left:50%;
  top:50%;
  transform:translateX(-50%) translateY(-50%);
  display:flex;
  flex-direction:column;
  width:80%;
  height:90%;
  background-color:#ccc;
  border-radius:25px;
  color:#000;
  z-index:1;
  padding:15px 30px;
  overflow:auto;
`;

const UserName = styled.h3`
  font-size:1.5rem;
`;

const ClubItemContainer = styled.div`
  display:flex;
  width:100%;
  border-top:10px solid #3e3d55;
  border-bottom: 1px solid #3e3d55;
  background-color:#fff;
  margin:15px 0;
`;
const ClubItem = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  text-align:center;
  padding:10px;
  box-sizing:border-box;
`;
const ClubItemTitle = styled.p`margin-bottom:10px;`;
const ClubItemResult = styled.p`
  flex:1; 
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  font-size:32px;
`;

const Item = styled.span `${props => props.styled}`;
const GrapeContainer = styled.div`
  flex: 0 0 100%;
  display:flex;
  align-items:center;
  font-size:16px;
  color:#3e3d55;
`;
const Grape = styled.span `
  flex:1;
  position:relative;
  background-color:#e1e1e1;
  height:12px;
  margin:0 5px;
  &:after{
    content:'';
    position:absolute;
    left:0;
    width:${props => props.value}%;
    height:100%;
    background-color:${props => props.bgColor};
  }
`;

const SquadContainer = styled.div`
  flex:1;
  width:100%;
  max-height:928px;
  overflow:auto;
`;

const Squad = styled.div`
  position:relative;
  width:1280px;
  height:928px;
  background:url(${props => props.bgImage}) no-repeat center 108px;
  background-size:contain;
  margin:0 auto;
`;

const PlayerContainer = styled.div`
  position:absolute;
  top: 17.3%;
  left: 13.5%;
  z-index: 5;
  width: 72.9%;
  height: 48.2%;
`;

const Player = styled.span`
  position: absolute;
  width: 106px;
  height: 170px;
  font-size: 12px;
  text-align: center;
  color: #000;
  z-index: 1;
  margin-left: -53px;
  margin-top: -85px;
  transition: transform 0.2s ease-in-out;
  background:url(${props => props.bgImage}) no-repeat;
  background-size:cover;

  ${props => props.position === 0? 
    `top: auto; left: 50%; bottom: -200px;` : 
    props => props.position === 1 ? 
    `top: auto; left:50%; bottom: -100px;`: 
    props => props.position === 2 ? 
    `top: 82%; left: 90%;` :
    props => props.position === 3 ?
    `top:100%; left:93%;` : 
    props => props.position === 4 ?
    `top:100%; left:68%;` :
    props => props.position === 5 ?
    `top:100%; left:50%;` :
    props => props.position === 6 ?
    `top:100%; left:32%;` :
    props => props.position === 7 ?
    `top:100%; left:10%;` :
    props => props.position === 8 ?
    `top:82%; left:10%; z-index:1;` :
    props => props.position === 9 ?
    `left:68%; top:58%; z-index:1` :
    props => props.position === 10 ?
    `left:50%; top:58%; z-index:1` :
    props => props.position === 11 ?
    `left:32%; top:58%; z-index:1;` : 
    props => props.position === 12 ? 
    `top: 36%; left: 88%; z-index:2;` :
    props => props.position === 13 ? 
    `top: 47%; left: 68%; z-index:2;` :
    props => props.position === 14 ? 
    `top: 47%; left: 58%; z-index:2;` :
    props => props.position === 15 ? 
    `top: 47%; left: 32%; z-index:2;` :
    props => props.position === 16 ? 
    `top: 36%; left: 12%; z-index:2;` :
    props => props.position === 17 ? 
    `top: 34%; left: 75%; z-index:3` :
    props => props.position === 18 ? 
    `top: 34%; left: 50%; z-index:3` :
    props => props.position === 19 ? 
    `top: 34%; left: 25%; z-index:3` :
    props => props.position === 20 ? 
    `top: 21%; left: 70%; z-index:4` :
    props => props.position === 21 ? 
    `top: 14%; left: 50%; z-index:4;` :
    props => props.position === 22 ? 
    `top: 21%; left: 30%; z-index:4;` :
    props => props.position === 23 ? 
    `top: 4%; left: 88%; z-index:5;` :
    props => props.position === 24 ? 
    `top: 0; left: 58%; z-index:5` :
    props => props.position === 25 ? 
    `top: 0%; left: 50%; z-index:5;` :
    props => props.position === 26 ? 
    `top: 0; left: 42%; z-index:5` :
    props => props.position === 27 ? 
    `top: 4%; left: 12%; z-index:5;` : 'display:none'
  }
`;
const NameContainer = styled.div`
    position: absolute;
    bottom: 27px;
    left: 0;
    width: 100%;
    box-sizing: border-box;
`;

const Icon = styled.span`
  display:inline-block;
  width:13px;
  height:12px;
  background:url(${props => props.bgImage}) no-repeat center;
  background-size:cover;
  vertical-align: -2px;
  margin-right: 4px;
`;

const Pay = styled.span`
  display: block;
    position: absolute;
    bottom: 6px;
    text-align: center;
    line-height: 20px;
    left: 50%;
    margin-left: -8px;
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    background: url(${props => props.bgImage}) no-repeat;
    background-size: 18px auto;
    letter-spacing: 0;
    font-size: 10px;
`;

const Grade = styled.span`
  position: absolute;
  top: 112px;
  right: 3px;
  z-index: 500;
  background-color: ${props => props.bgColor};
  width: 24px;
  text-align: center;
  height: 14px;
  line-height: 14px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0;
  z-index: 1;
`;

const Thumb = styled.span`
    display: block;
    position: absolute;
    right: 2px;
    top: 39px;
    margin-left: 0;
    width: 87px;
    height: 87px;
    z-index: 1;
    background:url(${props => props.bgImage}) no-repeat right;
    background-size:cover;
`;

const Season = styled.span`
  position: absolute;
  top: 95px;
  left: 5px;
  text-align: center;
  width: 26px;
  height: 26px;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
`;

const Ovr = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  width: 34px;
  font-size: 17px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  letter-spacing: -1px;
  text-shadow: 0 0 2px #000;
  z-index: 2;
`;

const Position = styled.span`
  position: absolute;
  top: 39px;
  left: 0;
  width: 35px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  text-shadow: 0 0 2px #000;
  color: #fff;
  z-index: 2;
`;

const Name = styled.span``;


const Close = styled.button`
  position:absolute;
  right:10px;
  top:10px;
  width:25px;
  height:25px;
  background:url(${props => props.bgImage}) no-repeat center;
  background-size:25px;
  text-indent:-99999px;
  border:0;
  cursor:pointer;
`;


const UserInfo = ({userClubData, resetUserClusbData}) => (
  <Container>
    <Close onClick={resetUserClusbData} bgImage="/assets/image/button/btn_close.png">닫기</Close>
    <UserName>{userClubData.nickName}</UserName>
    <ClubItemContainer>
      <ClubItem>
        <ClubItemTitle>총 급여</ClubItemTitle>
        <ClubItemResult>
          <Item styled={`color:#25c7f5`}>{userClubData.totalClubPay}</Item> 
          <Item styled={`color:#b7b9bc;`}>/ 190</Item>
        </ClubItemResult>
      </ClubItem>
      <ClubItem>
        <ClubItemTitle>선수 가치 총합(교체 포함)</ClubItemTitle>
        <ClubItemResult>
          <Item styled={`color:#25c7f5`}>
            {userClubData.clubPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Item>
        </ClubItemResult>
      </ClubItem>
      <ClubItem>
        <ClubItemTitle>평균 능력치(최대150 OVR 기준)</ClubItemTitle>
        {/* 일부값 / 평균값 * 100 */}
        <ClubItemResult>
          <GrapeContainer>
            <Item styled={`color:#f6425f; flex:1; max-width:20px;`}>FW</Item> 
            <Grape value={111/150*100} bgColor="#f6425f"></Grape>
            <Item>111</Item>
          </GrapeContainer>
          <GrapeContainer>
            <Item styled={`color:#03d28c; flex:1; max-width:20px; `}>MF</Item> 
            <Grape value={109/150*100} bgColor="#03d28c"></Grape>
            <Item>109</Item>
          </GrapeContainer>
          <GrapeContainer>
            <Item styled={`color:#2b7def; flex:1; max-width:20px;`}>DF</Item> 
            <Grape value={102/150*100} bgColor="#2b7def"></Grape>
            <Item>102</Item>
          </GrapeContainer>
        </ClubItemResult>
      </ClubItem>
      <ClubItem>
        <ClubItemTitle>선수 인원(명)</ClubItemTitle>
        <ClubItemResult>
          <Item styled={`color:#25c7f5`}>11</Item>
        </ClubItemResult>
      </ClubItem>
    </ClubItemContainer>
    <SquadContainer>
      <Squad bgImage="http://s.nx.com/s2/game/fo4/obt/datacenter/squad/bg.png">
        <PlayerContainer>
          {
            userClubData.players.map(player => (
              <Player bgImage={player.cardImageUrl} position={player.spPosition} key={player.spId}>
                <Thumb bgImage={`${process.env.REACT_APP_IMG_API_URL}${player.imageId}.png`}></Thumb>
                <Season></Season>
                <Ovr>{player.ablilty}</Ovr>
                <Position>{player.positionDescription}</Position>
                <NameContainer>
                  <Icon bgImage={player.seasonImgUrl}></Icon>
                  <Name>{player.originalName}</Name>
                </NameContainer>
                <Pay bgImage={'http://s.nx.com/s2/game/fo4/obt/datacenter/squad/ico_pay.png'}>{player.pay}</Pay>
                <Grade 
                  bgColor={
                    player.spGrade === 1 ? '#45494f' :
                    player.spGrade > 1 && player.spGrade < 5 ? '#c37653' :
                    player.spGrade > 4 && player.spGrade < 8? '#c2c5ca' : '#e8c337'
                  }
                >{player.spGrade}</Grade>
              </Player>
            ))
          }
        </PlayerContainer>
      </Squad>
    </SquadContainer>
    
  </Container>
  
)

export default UserInfo;

UserInfo.propTypes = {
  userClubData:PropTypes.object,
  resetUserClusbData:PropTypes.func.isRequired
}