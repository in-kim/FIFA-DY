import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from './Loding';
import { matchListApi } from '../api';

const TopRank = () => {

  const [list,setList] = useState({});
  const [loading, setLoding] = useState(false);
  
  const fecthList = async() => {
    try {
      setLoding(true);
      const { data: {content} } = await matchListApi.topRank(1, 5);
      setList(content);
    } catch {
      console.log('top rank api error');
    } finally{
      setLoding(false);
    }
  }

  useEffect(()=>{
    fecthList();
  },[])

  return(
    <Container>
      <Title>Top Rank</Title>
      <RankingContainer>
        {
          console.log(list,loading)
        }
        {
          loading ? <Loading /> : (
            Object.keys(list).length > 0 && list.map((item,index) => (
              <RankingItem className={index === 0 ? 'top' : ''}>
                <Number>{index+1}</Number>
                <Name>{item.nickName}</Name>
                <Price>
                  {item.clubPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BP
                </Price>
              </RankingItem>
            ))
          )
        }
      </RankingContainer>
    </Container>
  )
}

const Container = styled.div`
  position:absolute;
  right:10px;
  top:50px;
  width:300px;
  z-index:10;
`;

const Title = styled.h3`
  font-size:30px;
  text-align:center;
  margin-bottom:20px;
`;

const RankingContainer = styled.div`
  border:2px solid #fff;
  padding:10px;
`;
const RankingItem = styled.div`
  display:flex;
  padding:10px;
  font-size:15px;
  color:#fff;
  align-items:center;

  &.top > span {
    color:yellow;
  }
`;

const Number = styled.span`
  margin-right:10px;
  font-size:20px;
  color:${props => props.color}
`;

const Name = styled.span`
  flex:1;
  color:#fff;
`;

const Price  = styled.span`
`;

export default TopRank;