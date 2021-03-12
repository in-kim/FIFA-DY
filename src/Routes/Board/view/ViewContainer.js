import React from'react';
import ViewPresenter from './ViewPresenter';

const ViewContainer = (props) => {
  const {history:{push}} = props;
  const {match:{params:{page,contentId}}} = props

  const handlePage = () => {
    push(`/board/${page}/edit/${contentId}`);
  }
  
  return (
    <ViewPresenter 
      handlePage={handlePage} 
    />
  )
}

export default ViewContainer;