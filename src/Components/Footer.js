import React from 'react';
import styled from 'styled-components';

const  Container = styled.div`
  position:absolute;
  bottom:-100px;
  left:0;
  z-index:0;
  width:100%;
  background-color:transparent;
  text-align:left;
  padding:10px;
  box-sizing:border-box;
  opacity:0.3;
`;

const Item = styled.p`
  color:#fff;
`;

const Footer = () => (
  <Container>
    <Item>Data based on NEXON DEVELOPERS</Item>
    <Item>Frontend Developer : Dongry (ehddls960617@gmail.com)</Item>
    <Item>Backend  Developer : Lee dobby (swj03095@naver.com)</Item>
    <Item>Team : GSD (Generic Stupid Developer)</Item>
    <Item>Logo : Kwon YuJin(dbwlsqh036@naver.com)</Item>
  </Container>
)

export default Footer;