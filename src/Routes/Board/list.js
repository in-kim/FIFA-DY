import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Link } from 'react-router-dom';
import * as Board from './style';

import SideMenu from 'Components/SideMenu';
import Footer from 'Components/Footer'

@inject('board')
@observer
class BoardList extends Component{
  constructor(props){
    super(props);

    const { board, match: { params: { page: pageId } } } = this.props;
    board.setTitle(pageId);
  }

  componentDidUpdate(){
    const { board, match: { params: { page: pageId } } } = this.props;
    board.setTitle(pageId);
  }
  
  render(){
    const { board } = this.props; // store 연걸
    const { match: { params: { page: pageId } } } = this.props;

    return(
      <>
        <Board.Container>
          <SideMenu/>
          <Board.Header>
            <Board.Title>{board.pageName}</Board.Title>
            <Board.WriteButton>
              <Link to={`/board/${pageId}/write`}>글쓰기</Link>
            </Board.WriteButton>
          </Board.Header>
          <Board.TableHeader>
            <Board.TableItem size="5">No</Board.TableItem>
            <Board.TableItem size="15">제목</Board.TableItem>
            <Board.TableItem size="65">내용</Board.TableItem>
            <Board.TableItem size="15">등록일</Board.TableItem>
          </Board.TableHeader>
          <Board.TableRow>
            {
              !board.list ? <Board.TableItem size="100">등록된 게시물이 없습니다.</Board.TableItem> :
              board.list.map((list,index) => {
                <>
                  <Board.TableItem size="5">{index+1}</Board.TableItem>
                  <Board.TableItem size="15">{list.title}</Board.TableItem>
                  <Board.TableItem size="80">{list.text}</Board.TableItem>
                  {/* <Board.TableItem size="15">{list.date}</Board.TableItem> */}
                </>
              })
            }
          </Board.TableRow>
        </Board.Container>
        <Footer />
      </>
    )
  }
}

export default BoardList;

// const BoardContainer = (props) => {
//   const {match:{params:{page}}} = props;
//   const [pageName,setpageName] = useState('');
//   const pageId = page;

//   const updateTitle = useCallback(() => {
//     if(page==="community"){
//       setpageName('커뮤니티');
//     }else if(page==="tendinous"){
//       setpageName('건의');
//     }else if(page==="notice"){
//       setpageName('공지사항');
//     }
//   },[page]);

//   useEffect(() => {
//     updateTitle();
//   },[updateTitle,page])
//   return(
//     <BoardPresenter 
//       page={pageName} 
//       id={pageId}
//     />
//   )
// }

// export default BoardContainer