import React, { useEffect, useState } from'react';
import ViewPresenter from './ViewPresenter';
import {BoardApi} from '../../../api';

const ViewContainer = (props) => {
  const {history} = props;
  const {match:{params:{page:pageId,contentId}}} = props

  const [result, setResult] = useState({});
  const [pageName, setPageName] = useState('');
  const [velidPwd, setVelidPwd] = useState('');

  const updatePageName = () => {
    if (pageId === "50") {
      setPageName('건의게시판')
    } else if (pageId === "51") {
      setPageName('커뮤니티')
    } else {
      history.go('/');
    }
  }

  const handlePage = (type) => {
    if (type ==='modify'){
      history.push(`/board/${pageId}/modify/${contentId}/${velidPwd}`);
    }else if(type==='list'){
      history.push(`/board/${pageId}/list`);
    }else{
      history.push(`/`);
    }
  }

  const handleVerificationChange = (e) => {
    const {target:{value}} = e;
    setVelidPwd(value);
  }

  const handleVerificationSubmit = async(e) =>{
    const {target:{name}} = e;
    e.preventDefault();
    if(name==='delete'){
      try {
        await BoardApi.delete(contentId,velidPwd);
        alert('삭제 되었습니다.');
        handlePage('list');
      } catch {
        alert('비밀번호가 다릅니다.');
      }
    }else{
      try {
        const {data:{message}} = await BoardApi.velification(contentId,velidPwd);
        if(message==="success"){
          handlePage('modify');
        }
      } catch {
        alert('비밀번호가 다릅니다.');
      }
    }
  }

  const fecthList = async() => {
    try {
      const {data:{data}} = await BoardApi.detail(contentId);
      setResult(data);
    }catch{
      console.log('board detail api error')
    }
  }

  const deletePost = () => {
    try{
      BoardApi.delete(contentId);
    }catch{
      console.log('deletePost fail');
    }
  }
  
  useEffect(() =>{
    fecthList();
    updatePageName();
  },[])

  return (
    <ViewPresenter 
      result={result}
      pageName={pageName}
      velidPwd={velidPwd}
      deletePost={deletePost}
      handlePage={handlePage} 
      handleVerificationChange={handleVerificationChange}
      handleVerificationSubmit={handleVerificationSubmit}
    />
  )
}

export default ViewContainer;