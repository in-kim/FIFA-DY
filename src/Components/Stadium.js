import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from 'Components/Loding';
import Player from 'Components/Player';

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

const Price = styled.span`
  display:block;
  text-align:center;
  font-size:25px;
  margin-top:20px;
  text-shadow:none;
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
  z-index:5;
  transform:translateX(-50%);
  display:flex;
  width:69%;
  height:830px;
  background:url(${props => props.bgImage}) no-repeat;
  background-size:contain;
`;

const TeamContainer = styled.div`
  display:flex;
  flex:1;
  max-width:50%;
  position:relative;
`;

const PositionArea = styled.div`
  position:relative;
  flex:0 0 14.28%;
  max-width:14.28%;
`;

const Stadium = ({PlayerResult, ClubPrice, error, loading}) => (
  <>
    {
      loading ? <Loading /> :
      <Container>
        <Cover bgImage={`${process.env.REACT_APP_URL}/assets/image/bg_stadium.jpg`}></Cover>
        <VersusContainer>
          <Nickname>
            {PlayerResult.myNickName}
            <Price>
              {ClubPrice.myClub.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP
            </Price>
          </Nickname>
          <Versus>
            <VersusFirst>V</VersusFirst>
            <VersusLast>S</VersusLast>
          </Versus>
          <Nickname>
            {PlayerResult.enemyNickName}
            <Price>
              {ClubPrice.enemyClub.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP
            </Price>
          </Nickname>
        </VersusContainer>
        <SoccerField bgImage={`${process.env.REACT_APP_URL}/assets/image/bg_field.jpg`}>
          <TeamContainer>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition === 0 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionName={home.positionDescription}
                        positionId="GK"
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition >= 1 && home.spPosition <= 8 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionName={home.positionDescription}
                        positionId="D"
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition >= 9 && home.spPosition <= 11 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionId="M"
                        positionName={home.positionDescription}
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition >= 12 && home.spPosition <= 16 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionName={home.positionDescription}
                        positionId="M"
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition >= 17 && home.spPosition <= 19 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionName={home.positionDescription}
                        positionId="M"
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition >= 20 && home.spPosition <= 22 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionName={home.positionDescription}
                        positionId="S"
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.myPlayer.map((home,index) => (
                  home.spPosition >= 23 && home.spPosition <= 27 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${home.imageId}.png`}
                        team="home"
                        name={home.name}
                        originalName={home.originalName}
                        positionName={home.positionDescription}
                        positionId="S"
                        spPosition={home.spPosition}
                        spGrade={home.spGrade}
                        status={home.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
          </TeamContainer>

          {/* away */}
          <TeamContainer>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition >= 23 && away.spPosition <= 27 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        positionId="S"
                        spPosition={away.spPosition}
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition >= 20 && away.spPosition <= 22 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        spPosition={away.spPosition}
                        positionId="S"
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition >= 17 && away.spPosition <= 19 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        positionId="M"
                        spPosition={away.spPosition}
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition >= 12 && away.spPosition <= 16 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        spPosition={away.spPosition}
                        positionId="M"
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition >= 9 && away.spPosition <= 11 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        positionId="M"
                        spPosition={away.spPosition}
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition >= 1 && away.spPosition <= 8 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        positionId="D"
                        spPosition={away.spPosition}
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
            <PositionArea>
              {
                PlayerResult.enemyPlayer.map((away,index) => (
                  away.spPosition === 0 ? (
                      <Player 
                        key={index}
                        bgImage={`${process.env.REACT_APP_IMG_API_URL}${away.imageId}.png`}
                        team="away"
                        name={away.name}
                        originalName={away.originalName}
                        positionName={away.positionDescription}
                        positionId="GK"
                        spPosition={away.spPosition}
                        spGrade={away.spGrade}
                        status={away.status}
                      />
                  ) : null
                ))
              }
            </PositionArea>
          </TeamContainer>
        </SoccerField>
      </Container>
    }
  </>
)

Stadium.propTypes = {
  PlayerResult:PropTypes.object,
  ClubPrice:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired, 
}

export default Stadium;