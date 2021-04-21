import React, { useState, useEffect, useCallback } from 'react';
import ListPresenter from './ListPresenter';

import { BoardApi } from 'api';

const ListContainer = (props) => {
  const { history, match: { params: { page:pageId } } } = props;

  const [list,setList] = useState({});
  const [pageName,setPageName] = useState('');
  const [pageNumber,setPageNumber] = useState(1);
  const [paging,setPaging] = useState({});
  
  const [division,setDivision] = useState('');
  const [keyword,setKeyword] = useState('');

  const resetData = () => {
    setPageNumber(1);
  }

  const updatePageName = () => {
    if (pageId === "50") {
      setPageName('건의게시판')
    } else if (pageId === "51") {
      setPageName('커뮤니티')
    } else {
      history.push('/');
    }
  } 

  const updatePage = (num) => {
    console.log(num);
    if (num === 0) {
      alert('첫번째 페이지 입니다.');
    } else if (num > paging['totalPages']) {
      alert('마지막 페이지 입니다.');
    } else {
      setPageNumber(num);
    }
  }

  const fecthList = async() => {
    try {
      const { data:{data} } = await BoardApi.list(pageId, division, keyword, pageNumber);
      const { content, empty, first, last, number, numberOfElments, pageable, size, sort, totalElements, totalPages } = data;
      setList(content);
      setPaging({ 
        first: data.first,
        last: data.last,
        number: data.number,
        pageable: data.pageable,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
      });
      console.log(`
        list : ${list},
        empty : ${empty},
         first : ${first},
         last : ${last},
         number : ${number},
         numberOfElments : ${numberOfElments},
         pageable : ${pageable},
         size : ${size},
         sort : ${sort},
         totalElements : ${totalElements},
         totalPages : ${totalPages}
      `);
    } catch {
      console.log('board list api error');
    }
  }
  
  useEffect(() => {
    updatePageName();
    resetData();
    fecthList();
  }, [pageId]);

  useEffect(() => {
    fecthList();
  }, [pageNumber])

  return (
    <ListPresenter 
      list={list}
      pageName={pageName}
      pageId={pageId}
      pageNumber={pageNumber}
      paging={paging}
      updatePage={updatePage}
    />
  )
}

export default ListContainer;