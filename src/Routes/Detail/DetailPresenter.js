import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loading from 'Components/Loding';
import Stadium from 'Components/Stadium';

const PlayerList = styled.div`
  position:absolute;
  top: calc(5% + 130px);
  ${props => props.wide};
  z-index:1;
  display:flex;
  flex-direction:column;
  background:rgba(0,0,0,0.3);
  color:#fff;
  font-size:15px;
  padding:10px;
`;

const Title = styled.span`
  font-size:1.3rem;
  margin-bottom:20px;
`;

const PlayerListItem = styled.span`
  display:flex;
  margin-bottom:10px;
  justify-content:space-between;
  order: ${props=>props.order};
`;

const Name = styled.span`
  margin-right:10px;
`;
const Position = styled.span`
  background-color:${props => props.bgColor};
  margin-right:5px;
  padding:0 2px;
`;
const Price = styled.span``;

const DetailPrecenter = ({PlayerResult, ClubPrice, error, loading}) => (
  <>
    <PlayerList wide="left: 10px">
      <Title>선수 명단</Title>
      {
        loading ? <Loading /> :
        PlayerResult.myPlayer.map((player,index) => (
          <PlayerListItem 
            key={index} 
            order={player.spPosition}
          >
            {
              <>
                <Position 
                  bgColor={
                    player.spPosition === 0 ? '#e9a216' : 
                    player.spPosition > 0 && player.spPosition < 9 ? '#1476ff' :
                    player.spPosition > 8 && player.spPosition < 20 ? '#03cd7a' :
                    player.spPosition > 19 && player.spPosition < 28 ? '#f6425f' : '#c2c5ca'
                  }
                >{player.positionDescription}</Position>
                <Name>{player.originalName}</Name>
                <Price>{player.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP</Price>
              </>
            }
          </PlayerListItem>
        ))
      }
    </PlayerList>
    <Stadium 
      PlayerResult={PlayerResult}
      ClubPrice={ClubPrice}
      error={error}
      loading={loading}
    />
    <PlayerList wide="right: 10px">
      <Title>선수 명단</Title>
      {
        loading ? <Loading /> :
        PlayerResult.enemyPlayer.map((player,index) => (
          <PlayerListItem 
            key={index}
            order={player.spPosition}
          >
            {
              <>
                <Position 
                  bgColor={
                    player.spPosition === 0 ? '#e9a216' : 
                    player.spPosition > 0 && player.spPosition < 9 ? '#1476ff' :
                    player.spPosition > 8 && player.spPosition < 20 ? '#03cd7a' :
                    player.spPosition > 19 && player.spPosition < 28 ? '#f6425f' : '#c2c5ca'
                  }
                >{player.positionDescription}</Position>
                <Name>{player.originalName}</Name>
                <Price>{player.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP</Price>
              </>
            }
          </PlayerListItem>
        ))
      }
    </PlayerList>
  </>
)

DetailPrecenter.propTypes = {
  PlayerResult:PropTypes.object,
  ClubPrice:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired, 
}

export default DetailPrecenter;