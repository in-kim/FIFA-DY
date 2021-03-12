import React, { useEffect, useState } from 'react';
import BoardPresenter from './BoardPresenter';

const BoardContainer = (props) => {
  const {match:{params:{page}}} = props;
  const [pageName,setpageName] = useState('');
  const pageId = page;

  const updateTitle = () => {
    if(page==="community"){
      setpageName('커뮤니티');
    }else if(page==="tendinous"){
      setpageName('건의');
    }else if(page==="notice"){
      setpageName('공지사항');
    }
  }

  useEffect(() => {
    updateTitle();
  },[page])
  return(
    <BoardPresenter 
      page={pageName} 
      id={pageId}
    />
  )
}

export default BoardContainer