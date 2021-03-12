import React, { useEffect, useState } from'react';
import EditPresenter from './EditPresenter';

const EditContainer = (props) => {
  const {match:{id}} = props;
  const [pageName,setPageName] = useState(""); 
  
  useEffect(()=> {
    switch(id){
      case "1":
        setPageName("커뮤니티")
        return pageName;
      case "2":
        setPageName("건의")
        return pageName;
      case "3":
        setPageName("공지사항")
          return pageName;
      default:
        return "error";
    }
  },[id,pageName])

  return (
    <EditPresenter pageName={pageName}/>
  )
}

export default EditContainer;