import React from 'react';
import * as Tag from './style';

const EditPresenter = ({pageName}) => {

  return (
    <Tag.Container>
      <Tag.Title>{pageName} 게시판</Tag.Title>
      <Tag.Form>
        <Tag.Input placeholder="제목을 입력해주세요." />
        <Tag.TextArea></Tag.TextArea>
        <Tag.ButtonContainer>
          <Tag.Button type="submit" design={`color:#3498db;margin-right:5px;`}>저장</Tag.Button>
          <Tag.Button type="button" design={`color:#e74c3c`}>취소</Tag.Button>
        </Tag.ButtonContainer>
      </Tag.Form>
    </Tag.Container>
  )
}

export default EditPresenter;