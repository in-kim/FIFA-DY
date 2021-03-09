import React from 'react';
import styled from 'styled-components';
import SideMenu from 'Components/SideMenu';
import Footer from 'Components/Footer'

const Container = styled.div`
  position:relative;
  width:1024px;
  height:100%;
  margin:0 auto;
  padding-top:80px;
`;

const Title = styled.h1`
  width:100%;
  font-size:30px;
  margin-bottom:10px;
`;

const TableHeader = styled.div`
  display:flex;
  align-items:center;
  font-size:20px;
  border:1px solid #fff;
  border-bottom:0;
`;

const TableRow = styled.div`
  display:flex;
  align-items:center;
  background-color:#fff;
  font-size:20px;
  color:#222;
  border:1px solid #fff;
  border-bottom:1px solid #000;
`;

const TableItem = styled.span`
  flex:1;
  max-width:${props => props.size}%;
  text-align:center;
  padding:10px 20px;
`;


const BoardPresenter = ({page}) => {
  return (
    <>
      <Container>
        <SideMenu/>
        <Title>{page} 게시판</Title>
        <TableHeader>
          <TableItem size="5">No</TableItem>
          <TableItem size="15">제목</TableItem>
          <TableItem size="65">내용</TableItem>
          <TableItem size="15">등록일</TableItem>
        </TableHeader>
        <TableRow>
          <TableItem size="5">1</TableItem>
          <TableItem size="15">안녕하세요.</TableItem>
          <TableItem size="65">안녕하세요. 이요한 입니다. 죄송합니다.</TableItem>
          <TableItem size="15">2021.06.11</TableItem>
        </TableRow>
        <TableRow>
          <TableItem size="5">2</TableItem>
          <TableItem size="15">안녕하세요.</TableItem>
          <TableItem size="65">안녕하세요. 이요한 입니다. 죄송합니다.</TableItem>
          <TableItem size="15">2021.06.11</TableItem>
        </TableRow>
      </Container>
      <Footer />
    </>
  )
}

export default BoardPresenter;