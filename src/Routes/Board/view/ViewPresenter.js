import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position:relative;
  width:1024px;
  height:100%;
  margin:0 auto;
  padding-top:80px;
`;

const Title = styled.div`
  font-size:30px;
  margin-bottom:20px;
`

const Content = styled.div`
  width:100%;
  min-height:300px;
  border:2px solid #fff;
  font-size:20px;
  line-height:20px;
  margin-bottom:30px;
  padding:20px;
  white-space:pre-line;
`

const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const Button = styled.button`
  font-family:inherit;
  font-size:20px;
  color:#222;
  background-color:#fff;
  padding:5px 10px;
  border:1px solid #ddd;
  border-radius:10px;
  ${props => props.design};
  cursor:pointer;

  & > a {
    width:100%;
    height:100%;
    color:inherit;
    font-size:inherit;
    font-family:inherit;
  }
`;

const Item = styled.span`
  ${props => props.design}
`;


const ViewPresenter = ({handlePage}) => {
  return (
    <Container>
      <Title>안녕하세요.</Title>
      <Content>
        안녕하세요.
        이요한입니다.
        죄송합니다.
        이요한이라서 죄송합니다.
      </Content>
      <ButtonContainer>
        <Item design={`flex:1;`}>
          <Button>
            <Link to="/">목록</Link>
          </Button>
        </Item>
        <Item design={`flex:1; text-align:right`}>
          <Button 
            design={`color:#3498db; margin-right:10px;`}
            onClick={handlePage}
          >수정</Button>
          <Button design={`color:#e74c3c`}>삭제</Button>
        </Item>
      </ButtonContainer>
    </Container>
  )
}

export default ViewPresenter;