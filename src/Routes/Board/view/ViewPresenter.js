import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import * as Board from './style';


const ViewPresenter = ({result, pageName, velidPwd, ...fn }) => {
  const [isPasswordPop,setIsPasswordPop] = useState(false);
  const [isDeletePop,setIsDeletePop] = useState(false);

  const handleClickPasswordPop = () => {
    setIsPasswordPop(!isPasswordPop);
  }

  const handleClickDeletePop = () => {
    setIsDeletePop(!isDeletePop);
  }
  
  return (
    Object.keys(result).length > 0 && (
      <>
        <Board.Container>
          <Board.Title>{pageName}</Board.Title>
          <Board.Form>
            <Board.InputContainer>
              <Board.InputBox>
                <Board.Label>작성자</Board.Label>
                <Board.Input disabled readOnly value={result.creator} name="creator" />
              </Board.InputBox>
              <Board.InputBox>
                <Board.Label>작성일</Board.Label>
                {
                  result.createdDate && <Board.Input readOnly disabled value={result.createdDate.slice(0, 10)} />
                }
                
              </Board.InputBox>
            </Board.InputContainer>
            <Board.InputContainer>
              <Board.InputBox>
                <Board.Label>제목</Board.Label>
                <Board.Input disabled readOnly value={result.title} name="title" />
              </Board.InputBox>
            </Board.InputContainer>
            <Board.TextArea disabled readOnly value={result.text} name="text"></Board.TextArea>
            <Board.ButtonContainer>
              <Board.Item design={`flex:1;`}>
                <Board.Button onClick={() => fn.handlePage('list')}>목록</Board.Button>
              </Board.Item>
              <Board.Item design={`flex:1; text-align:right`}>
                <Board.Button
                  design={`color:#3498db; margin-right:10px;`}
                  onClick={() => handleClickPasswordPop()}
                >수정</Board.Button>
                <Board.Button design={`color:#e74c3c`} onClick={() => handleClickDeletePop()}>삭제</Board.Button>
              </Board.Item>
            </Board.ButtonContainer>
          </Board.Form>
        </Board.Container>
        {
          isPasswordPop && (
            <Board.PopContainer>
              <Board.Dimmer onClick={() => handleClickPasswordPop()}/>
              <Board.PopBody>
                <Board.PopForm onSubmit={fn.handleVerificationSubmit}>
                  <Board.PopLabel>비밀번호 : </Board.PopLabel>
                  <Board.PopInput type="password" value={velidPwd} onChange={fn.handleVerificationChange} placeholder="비밀번호 입력" />
                  <Board.PopButton type="submit">확인</Board.PopButton>
                </Board.PopForm>
              </Board.PopBody>
            </Board.PopContainer>
          )
        }
        {
          isDeletePop && (
            <Board.PopContainer>
              <Board.Dimmer onClick={() => handleClickDeletePop()}/>
              <Board.PopBody>
                <Board.PopTitle>삭제 하시겠습니까?</Board.PopTitle>
                <Board.PopForm onSubmit={fn.handleVerificationSubmit} name="delete">
                  <Board.PopLabel>비밀번호 : </Board.PopLabel>
                  <Board.PopInput type="password" value={velidPwd} onChange={fn.handleVerificationChange} placeholder="비밀번호 입력" />
                  <Board.PopButton type="submit">확인</Board.PopButton>
                </Board.PopForm>
              </Board.PopBody>
            </Board.PopContainer>
          )
        }
        
      </>
    )
  )
}

  export default ViewPresenter;
