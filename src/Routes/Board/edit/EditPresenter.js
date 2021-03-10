import React from 'react';
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
  text-align:center;
  margin-bottom:20px;
`

const Form = styled.form`
  font-family:inherit;
`;

const Input = styled.input`
  width:100%;
  font-family:inherit;
  font-size:30px;
  color:#fff;
  background-color:transparent;
  border:2px solid #fff;
  border-radius:10px;
  margin-bottom:20px;
  padding:10px 20px;
`;

const TextArea = styled.textarea`
  width:100%;
  min-height:300px;
  font-family:inherit;
  font-size:20px;
  color:#fff;
  background-color:transparent;
  border:2px solid #fff;
  border-radius:10px;
  line-height:20px;
  margin-bottom:30px;
  padding:10px 20px;
`;

const ButtonContainer = styled.div`
  text-align:center;
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

const EditPresenter = ({pageName}) => {

  return (
    <Container>
      <Title>{pageName} 게시판</Title>
      <Form>
        <Input placeholder="제목을 입력해주세요." />
        <TextArea></TextArea>
        <ButtonContainer>
          <Button type="submit" design={`color:#3498db;margin-right:5px;`}>저장</Button>
          <Button type="button" design={`color:#e74c3c`}>취소</Button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default EditPresenter;