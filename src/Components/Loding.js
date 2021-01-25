import React from 'react';
import styled from 'styled-components';

const Item = styled.span`
  display:flex;
  width:100%;
  height:100%;
  font-size:90px;
  align-items:center;
  justify-content:center;
`;

const Loading = () => (
  <Item>로딩중입니다.</Item>
)

export default Loading;