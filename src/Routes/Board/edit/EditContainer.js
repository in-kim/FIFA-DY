import React, { useEffect } from'react';
import EditPresenter from './EditPresenter';

const EditContainer = (props) => {
  const {match:{id}} = props;
  let pageName = "";
  
  useEffect(()=> {
    switch(id){
      case "1":
        pageName="커뮤니티"
        return pageName;
      case "2":
        pageName="건의"
        return pageName;
      case "3":
          pageName="공지사항"
          return pageName;
      default:
        return "error";
    }
  },[id])
  console.log(pageName);

  return (
    <EditPresenter pageName={pageName}/>
  )
}

export default EditContainer;