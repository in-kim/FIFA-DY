import React from 'react';
import { Link } from 'react-router-dom';
import * as Tag from './style';


const ViewPresenter = ({handlePage}) => {
  return (
    <Tag.Container>
      <Tag.Title>안녕하세요.</Tag.Title>
      <Tag.Content>
        안녕하세요.
        이요한입니다.
        죄송합니다.
        이요한이라서 죄송합니다.
      </Tag.Content>
      <Tag.ButtonContainer>
        <Tag.Item design={`flex:1;`}>
          <Tag.Button>
            <Link to="/">목록</Link>
          </Tag.Button>
        </Tag.Item>
        <Tag.Item design={`flex:1; text-align:right`}>
          <Tag.Button 
            design={`color:#3498db; margin-right:10px;`}
            onClick={handlePage}
          >수정</Tag.Button>
          <Tag.Button design={`color:#e74c3c`}>삭제</Tag.Button>
        </Tag.Item>
      </Tag.ButtonContainer>
    </Tag.Container>
  )
}

export default ViewPresenter;