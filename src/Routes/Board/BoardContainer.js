import React, { useEffect, useState } from 'react';
import BoardPresenter from './BoardPresenter';

const BoardContainer = (props) => {
  const {match:{params:{id:pageName}}} = props;
  const [page,setPage] = useState('');

  const updateTitle = () => {
    
    if(pageName==="1"){
      setPage('커뮤니티');
    }else if(pageName==="2"){
      setPage('건의');
    }else if(pageName==="3"){
      setPage('공지사항');
    }
  }

  useEffect(() => {
    updateTitle();
  },[pageName])

  return(
    <BoardPresenter page={page}/>
  )
}

export default BoardContainer