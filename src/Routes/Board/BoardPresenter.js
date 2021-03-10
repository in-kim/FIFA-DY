import React from 'react';
import styled from 'styled-components';
import SideMenu from 'Components/SideMenu';
import Footer from 'Components/Footer'
import {Link} from 'react-router-dom';

const Container = styled.div`
  position:relative;
  width:1024px;
  height:100%;
  margin:0 auto;
  padding-top:80px;
`;
const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

const Title = styled.h1`
  flex:1;
  max-width:calc(100% - 60px);
  font-size:30px;
`;

const WriteButton = styled.span`
  flex:1;
  max-width:60px;

 & > a {
  border:1px solid #fff;
  font-size:20px;
  color:#fff;
  background-color:transparent;
  padding:5px 10px;

  &:hover {
    border:1px solid #ddd;
    background-color:#fff;
    color:#222;
  }
 }
`;

const TableHeader = styled.div`
  display:flex;
  align-items:center;
  font-size:20px;
  border:1px solid #fff;
  border-bottom:0;
`;

const TableRow = styled.div`
  & > a {
    display:flex;
    align-items:center;
    background-color:#fff;
    font-size:20px;
    color:#222;
    border:1px solid #fff;
    border-bottom:1px solid #000;
  }
`;

const TableItem = styled.span`
  flex:1;
  max-width:${props => props.size}%;
  text-align:center;
  padding:10px 20px;
`;


const BoardPresenter = ({page, id}) => {
  return (
    <>
      <Container>
        <SideMenu/>
        <Header>
          <Title>{page} 게시판</Title>
          <WriteButton>
            <Link to={`/board/${id}/edit`}>글쓰기</Link>
          </WriteButton>
        </Header>
        <TableHeader>
          <TableItem size="5">No</TableItem>
          <TableItem size="15">제목</TableItem>
          <TableItem size="65">내용</TableItem>
          <TableItem size="15">등록일</TableItem>
        </TableHeader>
        <TableRow>
          <Link to={`/board/${id}/detail/11111`}>
            <TableItem size="5">1</TableItem>
            <TableItem size="15">안녕하세요.</TableItem>
            <TableItem size="65">안녕하세요. 이요한 입니다. 죄송합니다.</TableItem>
            <TableItem size="15">2021.06.11</TableItem>
          </Link>
        </TableRow>
        <TableRow>
          <Link to={`/board/${id}/detail/22222`}>
            <TableItem size="5">2</TableItem>
            <TableItem size="15">안녕하세요.</TableItem>
            <TableItem size="65">안녕하세요. 이요한 입니다. 죄송합니다.</TableItem>
            <TableItem size="15">2021.06.11</TableItem>
          </Link>
        </TableRow>
      </Container>
      <Footer />
    </>
  )
}

export default BoardPresenter;