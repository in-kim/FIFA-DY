import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`padding:50px;`;
const Item = styled.span``;

const DetailPrecenter = ({matchList, error, loading}) => (
  <Container>
    <Item>상세페이지 입니다.</Item>
  </Container>
)

DetailPrecenter.propTypes = {
  matchList:PropTypes.array,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired,  
}

export default DetailPrecenter;