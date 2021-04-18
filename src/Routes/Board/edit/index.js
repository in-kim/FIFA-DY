import { inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import * as Board from './style';

@inject('board')
@observer
class BoardEdit extends Component{
  constructor(props){
    super(props);

    const { board, match: { params: { page: pageId } } } = this.props;
    board.setTitle(pageId);

    this.state = {
      pageId,
      pageName:'',
    }
  }

  componentDidMount(){
    const {board} = this.props;
    board.updateDate();
  }  
  

  render(){
    const {history,board} = this.props;
    const { creator, password, date, title, content } = board.editData;

    // 완료 후 리스트로 이동을 위해 history store에 저장
    board.history = history; 
    return(
      <Board.Container>
        <Board.Title>{board.pageName}</Board.Title>
        <Board.Form onSubmit={board.handleEditSubmit}>
          <Board.InputContainer>
            <Board.InputBox>
              <Board.Label>작성자</Board.Label>
              <Board.Input placeholder="이름을 입력하세요." onChange={board.handleEditChange} value={creator} name="creator"/>
            </Board.InputBox>
            <Board.InputBox>
              <Board.Label>비밀번호</Board.Label>
              <Board.Input type="password" placeholder="비밀번호를 입력하세요." onChange={board.handleEditChange} value={password} name="password"/>
            </Board.InputBox>
            <Board.InputBox>
              <Board.Label>작성일</Board.Label>
              <Board.Input readOnly disabled value={date}/>
            </Board.InputBox>
          </Board.InputContainer>
          <Board.InputContainer>
            <Board.InputBox>
              <Board.Label>제목</Board.Label>
              <Board.Input placeholder="제목을 입력해주세요." onChange={board.handleEditChange} value={title} name="title"/>
            </Board.InputBox>
          </Board.InputContainer>
          <Board.TextArea placeholder="내용을 입력해주세요." onChange={board.handleEditChange} value={content} name="content"></Board.TextArea>
          <Board.ButtonContainer>
            <Board.Button type="submit" design={`color:#3498db;margin-right:5px;`}>저장</Board.Button>
            <Board.Button type="button" design={`color:#e74c3c`} onClick={() => history.goBack()}>취소</Board.Button>
          </Board.ButtonContainer>
        </Board.Form>
      </Board.Container>
    )
  }
}


export default BoardEdit;