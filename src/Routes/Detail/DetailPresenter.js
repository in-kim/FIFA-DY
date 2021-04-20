import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loading from 'Components/Loding';
import Stadium from 'Components/Stadium';
import Footer from "Components/Footer";

const DetailPrecenter = ({PlayerResult, ClubPrice, error, loading}) => (
  loading ? <Loading /> :
  <>
    <NoText>모바일 페이지는 준비중입니다.</NoText>
    <Container>
      <PlayerContainer wide="left: 10px">
        <Title>선수 명단</Title>
        <PlayerList>
          {
            error && error.length > 0 ? error :
            PlayerResult?.myPlayer.map((player,index) => (
              <PlayerListItem 
                key={index} 
                order={player.spPosition}
              >
                {
                  <>
                    <Flex>
                      <Position 
                        LineColor={
                          player.spPosition === 0 ? '#e9a216' : 
                          player.spPosition > 0 && player.spPosition < 9 ? '#1476ff' :
                          player.spPosition > 8 && player.spPosition < 20 ? '#03cd7a' :
                          player.spPosition > 19 && player.spPosition < 28 ? '#f6425f' : '#c2c5ca'
                        }
                      >{player.positionDescription}</Position>
                      <Section>
                        <Name>
                          <SeasonImage src={player.seasonImgUrl}/>
                          {player.originalName}
                        </Name>
                        <Price>{player.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP</Price>
                      </Section>
                    </Flex>
                    <Section>
                      <Grade 
                          bgColor={
                            player.spGrade === 1 ? "#45494f" : 
                            player.spGrade > 4 && player.spGrade < 8? "#c2c5ca" : 
                            player.spGrade > 7 ? "#e8c337" : "#c37653"
                          }

                          color={
                            player.spGrade === 1 ? "#fff" : 
                            player.spGrade > 4 && player.spGrade < 8? "#333" : 
                            player.spGrade > 7 ? "#333" : "#c25453"
                          }
                        
                        >{player.spGrade}</Grade>
                    </Section>
                  </>
                }
              </PlayerListItem>
            ))
          }
        </PlayerList>
      </PlayerContainer>
      {
        PlayerList && Object.keys(PlayerList) &&
        <Stadium 
          PlayerResult={PlayerResult}
          ClubPrice={ClubPrice}
          error={error}
          loading={loading}
        />
      }
      <PlayerContainer wide="right: 10px">
        <Title>선수 명단</Title>
        <PlayerList>
          {
            error && error.length > 0 ? error :
            PlayerResult?.enemyPlayer.map((player,index) => (
              <PlayerListItem 
                key={index}
                order={player.spPosition}
              >
                {
                  <>
                    <Flex>
                      <Position 
                        LineColor={
                          player.spPosition === 0 ? '#e9a216' : 
                          player.spPosition > 0 && player.spPosition < 9 ? '#1476ff' :
                          player.spPosition > 8 && player.spPosition < 20 ? '#03cd7a' :
                          player.spPosition > 19 && player.spPosition < 28 ? '#f6425f' : '#c2c5ca'
                        }
                      >{player.positionDescription}</Position>
                      <Section>
                        <Name>
                          <SeasonImage src={player.seasonImgUrl}/>
                          {player.originalName}
                        </Name>
                        <Price>{player.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP</Price>
                      </Section>
                    </Flex>
                    <Section>
                      <Grade 
                        bgColor={
                          player.spGrade === 1 ? "#45494f" : 
                          player.spGrade > 4 && player.spGrade < 8? "#c2c5ca" : 
                          player.spGrade > 7 ? "#e8c337" : "#c37653"
                        }

                        color={
                          player.spGrade === 1 ? "#fff" : 
                          player.spGrade > 4 && player.spGrade < 8? "#333" : 
                          player.spGrade > 7 ? "#333" : "#c25453"
                        }
                      
                      >{player.spGrade}</Grade>
                    </Section>
                  </>
                }
              </PlayerListItem>
            ))
          }
        </PlayerList>
      </PlayerContainer>
      <Footer/>
    </Container>
  </>
)

const Container = styled.div`
  position:relative;
  width:100%;
  height:100%;
  overflow:auto;

  @media screen and (max-width:1800px){
    width:1800px;
  }
  @media screen and (max-width:768px){
    display:none;
  }
`;

const NoText = styled.div`
  display:none;
  @media screen and (max-width:768px){
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    font-size:30px;
  }
`;

const PlayerContainer = styled.div`
  position:absolute;
  top: calc(5% + 130px);
  ${props => props.wide};
  z-index:1;
  width:14%;
  height:830px;
  background:rgba(0,0,0,0.3);
  color:#fff;
  font-size:15px;
  padding:10px 0 10px 10px;
`;

const PlayerList = styled.div`
  display:flex;
  flex-direction:column;
  height:calc(100% - 30px);
  overflow:auto;
  padding-right:20px;
`;

const Title = styled.span`
  font-size:1.3rem;
  margin-bottom:10px;
`;

const PlayerListItem = styled.span`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:10px 0;
  order: ${props=>props.order};
  border-bottom:1px solid #fff;
`;

const Name = styled.span`
  margin-right:10px;
`;

const SeasonImage = styled.img`
  width:20px;
  vertical-align:-4px;
  margin-right:5px;
`;
const Position = styled.span`
  display:inline-block;
  width:35px;
  border-left:5px solid ${props => props.LineColor};
  margin-right:5px;
  padding:0 2px;
  text-align:left;
`;
const Price = styled.span`
  display:block;
  margin-top:5px;
`;

const Grade = styled.span`
  background:${props => props.bgColor};
  margin-left:5px;
  padding:0 5px;
  color:${props => props.color};
  font-weight:700;
`;

const Section = styled.span``;

const Flex = styled.span`
  display:flex;
  align-items:center;
`;

DetailPrecenter.propTypes = {
  PlayerResult:PropTypes.object,
  ClubPrice:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired, 
}

export default DetailPrecenter;