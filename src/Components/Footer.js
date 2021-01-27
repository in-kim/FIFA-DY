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
    <Item>Front Developer : Dongry (ehddls960617@gmail.com)</Item>
    <Item>BackEnd Developer : Lee dobby (ehddls960617@gmail.com)</Item>
  </Container>
)

export default Footer;