import React from 'react';
import * as Board from './style';

const EditPresenter = ({ pageName, result, pageType, ...fn}) => {
  return (
    <Board.Container>
      <Board.Title>{pageName}</Board.Title>
      <Board.Form onSubmit={fn.handleEditSubmit}>
        <Board.InputContainer>
          <Board.InputBox>
            <Board.Label>작성자</Board.Label>
            <Board.Input placeholder="이름을 입력하세요." onChange={fn.handleEditChange} value={result.creator} name="creator" />
          </Board.InputBox>
          {
            pageType!=='modify' && (
              <Board.InputBox>
                <Board.Label>비밀번호</Board.Label>
                <Board.Input type="password" placeholder="비밀번호를 입력하세요." onChange={fn.handleEditChange} value={result.password} name="password" />
              </Board.InputBox>
            )
          }
          <Board.InputBox>
            <Board.Label>작성일</Board.Label>
            <Board.Input readOnly disabled value={result.date} />
          </Board.InputBox>
        </Board.InputContainer>
        <Board.InputContainer>
          <Board.InputBox>
            <Board.Label>제목</Board.Label>
            <Board.Input placeholder="제목을 입력해주세요." onChange={fn.handleEditChange} value={result.title} name="title" />
          </Board.InputBox>
        </Board.InputContainer>
        <Board.TextArea placeholder="내용을 입력해주세요." onChange={fn.handleEditChange} value={result.text} name="text"></Board.TextArea>
        <Board.ButtonContainer>
          <Board.Button type="submit" design={`color:#3498db;margin-right:5px;`}>저장</Board.Button>
          <Board.Button type="button" design={`color:#e74c3c`} onClick={() => fn.handleClickCancle()}>취소</Board.Button>
        </Board.ButtonContainer>
      </Board.Form>
    </Board.Container>
  )
}

export default EditPresenter;