import React, { useEffect, useState } from 'react';
import EditPresenter from './EditPresenter';
import {BoardApi} from '../../../api';

const EditContainer = (props) => {
  const { history, match: { params: { page: pageId, type, contentId:postId,password}}} = props;
  const [pageName, setPageName] = useState('');
  const [result,setResult] = useState({});

  const setTitle = () => {
    if (pageId === "50") {
      setPageName('건의게시판');
    } else if (pageId === "51") {
      setPageName('커뮤니티');
    } else {
      history.push(`/board/${pageId}/list`);
    }
  }

  const handleClickCancle = () => {
    history.push(`/board/${pageId}/list`);
  }

  const handleEditChange = (e) => {
    const {target: {name, value}} = e;
    if(Object.keys(result).length === 0){
      setResult({[name] : value});
    }else{
      setResult({ ...result, [name]: value });
    }
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const { creator, password, title, text } = result;
    if (creator === "") {
      alert('이름을 입력해주세요.');
    } else if (password === "") {
      alert('비밀번호를 입력해주세요.');
    } else if (title === "") {
      alert('제목을 입력해주세요.');
    } else if (text === "") {
      alert('내용을 입력해주세요.');
    } else {
      handleEditData();
    }
  }

  const handleEditData = async () => {
    if (type === "modify") {
      const { creator, title, text } = result;
      try {
        console.log(postId, creator, password, title, text);
        await BoardApi.modify(postId, creator,password, title, text);
      } catch {
        console.log('handleEditData modify api error');
      } finally {
        alert('수정 되었습니다.');
        history.push(`/board/${pageId}/list`);
      }
    }else{
      const { creator, password, title, text } = result;
      try {
        console.log(pageId, creator, password, title, text);
        await BoardApi.edit(pageId, creator, password, title, text);
      } catch {
        console.log('handleEditData api error');
      } finally {
        alert('등록 되었습니다.');
        history.push(`/board/${pageId}/list`);
      }
    }

  }

  const updateDate = () => {
    setResult({
      ['date'] : new Date().toISOString().substring(0, 10)
    });
  }

  const fecthData = async() => {
    try {
      const { data:{data} } = await BoardApi.detail(postId);
      setResult(data);
    } catch {
      console.log('board modify api error');
    }
  }

  useEffect(() =>{
    if(type === "modify"){
      fecthData();
    }
    setTitle();
    updateDate();
  },[])
  return (
    <EditPresenter
      pageName={pageName}
      result={result}
      pageType={type}
      handleEditChange={handleEditChange}
      handleEditSubmit={handleEditSubmit}
      handleClickCancle={handleClickCancle}
    />
  )
}

export default EditContainer;