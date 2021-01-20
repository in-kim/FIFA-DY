import React from 'react';
import DetailPrecenter from 'Routes/Detail/DetailPresenter';
import {matchList} from 'api';
// import api from api;

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    result:null,
    error:null,
    loading:true
  }

  async componentDidMount(){
    try{
      const {match: {params:{id}}, match: {params:{name}}} = this.props;
      
      console.log(await matchList.detail(id))
    }catch{

    }finally{

    }
  }

  render(){
    const { result, error, loading } = this.state;
    return(
      <DetailPrecenter 
        result={result}
        error={error}
        loading={loading}
      />
    )
  }
}
