import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loading from 'Components/Loding';

const Container = styled.div`
  width:100%;
  height:100%;
  padding:50px;
`;
const Cover = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background:url(${props => props.bgImage}) no-repeat center;
  opacity:0.3;
  z-index:0;
`;
const VersusContainer = styled.div`
  position:absolute;
  top:5%;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  align-items:center;
  width:80%;
  height:100px;
  text-align:center;
`;

const Nickname = styled.span`
  flex:1; 
  font-size:50px;
  text-shadow: 4px 3px 0 #7A7A7A;
`;
const Versus = styled.span`flex:0 0 100px;`;
const VersusFirst = styled.span`
  font-size:70px;
  text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #3498db 0px 0px 20px, #3498db 0px 0px 30px, #3498db 0px 0px 40px, #3498db 0px 0px 50px, #3498db 0px 0px 75px;
`;
const VersusLast = styled.span`
  font-size:50px;
  text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #e74c3c 0px 0px 20px, #e74c3c 0px 0px 30px, #e74c3c 0px 0px 40px, #e74c3c 0px 0px 50px, #e74c3c 0px 0px 75px;
`;

const SoccerField = styled.div`
  position:absolute;
  top:calc(5% + 130px);
  left:50%;
  transform:translateX(-50%);
  display:flex;
  width:69%;
  height:830px;
  background:url(${props => props.bgImage}) no-repeat;
  background-size:contain;
`;

const TeamContainer = styled.div`
  flex:1;
  position:relative;
  max-width:50%;
`;

const Player = styled.span`
  display:block;
  margin-bottom:10px;
`;
const Name = styled.span`
  padding:3px;
  background-color:#2c3e50;
  color:#fff;
  border-radius:3px;
`;
const Position = styled.span`
  padding:3px;
  color:#fff;
  background-color:#222;
  border-radius:5px;
  margin-left:5px;
`;
const PlayerImage = styled.span`
  display:block;
  width:50px;
  height:50px;
  border:1px solid #222;
  border-radius:50%;
  background:url(${props=> props.bgImage}) no-repeat center #fff;
  background-size:cover;
  margin-bottom:10px;
`;
const DetailPrecenter = ({result, error, loading}) => (
  <>
    {
      loading ? <Loading /> :
      <Container>
        <Cover bgImage={'/assets/image/bg_stadium.jpg'}></Cover>
        <VersusContainer>
          <Nickname>{result.myNickName}</Nickname>
          <Versus>
            <VersusFirst>V</VersusFirst>
            <VersusLast>S</VersusLast>
          </Versus>
          <Nickname>{result.enemyNickName}</Nickname>
        </VersusContainer>
        <SoccerField bgImage="/assets/image/bg_field.jpg">
          <TeamContainer>
            {
              result.myPlayer.map((home,index) => (
                home.spPosition !== 28 ? (
                  <Player key={index}>
                    <PlayerImage bgImage={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${String(home.spId).slice(-6)}.png`}></PlayerImage>
                    <Name>{home.name}</Name>
                    <Position>{home.spPosition}</Position>
                  </Player>
                ) : null
              ))
            }
          </TeamContainer>
          <TeamContainer>
            {
              result.enemyPlayer.map((away,index) => (
                away.spPosition !== 28 ? (
                  <Player key={index}>
                    <PlayerImage bgImage={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${String(away.spId).slice(-6)}.png`}></PlayerImage>
                    <Name>{away.name}</Name>
                    <Position>{away.spPosition}</Position>
                  </Player>
                ) : null
              ))
            }
          </TeamContainer>
        </SoccerField>
      </Container>
    }
  </>
)

DetailPrecenter.propTypes = {
  result:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired,  
}

export default DetailPrecenter;