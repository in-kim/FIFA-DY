import React from'react';
import ViewPresenter from './ViewPresenter';

const ViewContainer = (props) => {
  const {history:{push}} = props;
  const {match:{params:{id:pageId,contentId}}} = props

  const handlePage = () => {
    push(`/board/${pageId}/edit/${contentId}`);
  }
  
  return (
    <ViewPresenter 
      handlePage={handlePage} 
    />
  )
}

export default ViewContainer;