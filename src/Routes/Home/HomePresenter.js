import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  position:relative;
  width:100%;
  height:100%;
  padding:50px;
`;
const Item = styled.span``;
const Cover = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  &:after{
    content:'';
    position:absolute;
    left:50%;
    top:20%;
    width:320px;
    height:320px;
    transform:translateX(-50%);
    background:url(${props => props.bgImage}) no-repeat center;
    background-size:320px;
    opacity:0.5;
  }
`;

const Form = styled.span`
  position:absolute;
  top:calc(20% + 330px);
  left:50%;
  transform:translateX(-50%);
  
`;

const Input = styled.input`
  all:unset;
  width:320px;
  font-size:20px;
  background-color:#222;
  padding:0 10px 15px 10px;
  border-bottom:5px solid #fff;
`;

const SearchButton = styled.button`
  position:absolute;
  right:0;
  top:5px;
  width:20px;
  height:20px;
  background:url('/assets/image/button/btn-search.png') no-repeat;
  background-size:cover;
  border:0;
  cursor:pointer;
`;

const HomePrecenter = ({matchList, error, loading}) => (
  <Container>
    <Cover bgImage="https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p101000250.png"></Cover>
    <Form>
      <Input placeholder="구단주명을 입력하세요."/>
      <SearchButton></SearchButton>
    </Form>
  </Container>
)

HomePrecenter.propTypes = {
  matchList:PropTypes.array,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired,  
}

export default HomePrecenter;