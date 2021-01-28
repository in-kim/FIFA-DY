import React from 'react';
import styled from 'styled-components';

const  Container = styled.div`
  position:absolute;
  bottom:0;
  left:0;
  z-index:0;
  width:100%;
  background-color:transparent;
  text-align:left;
  padding:10px;
  box-sizing:border-box;
`;

const Item = styled.p`
  color:#fff;
`;

const Footer = () => (
  <Container>
    <Item>Data based on NEXON DEVELOPERS</Item>
    <Item>Frontend Developer : Dongry (ehddls960617@gmail.com)</Item>
    <Item>Backend  Developer : Lee dobby (swj03095@naver.com)</Item>
    <Item>Group : GSD (Generic Stupid Developer)</Item>
  </Container>
)

export default Footer;