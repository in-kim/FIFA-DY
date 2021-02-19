import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#000;
  z-index:1;
`;

const Item = styled.div``;

const Close = styled.button`

`;


const UserInfo = ({userClubData, resetUserClusbData}) => (
  <Container>
    <Item>{userClubData.clubPrice}</Item>
    {/* <Item>{userClubData.players.map(player => (
      {player}
    ))}</Item> */}
    <Item>{userClubData.totalClubPay}</Item>
    <Close onClick={resetUserClusbData}>닫기</Close>
  </Container>
  
)

export default UserInfo;

UserInfo.propTypes = {
  userClubData:PropTypes.object,
  resetUserClusbData:PropTypes.func.isRequired
}