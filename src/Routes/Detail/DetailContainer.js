import React from 'react';
import DetailPrecenter from 'Routes/Detail/DetailPresenter';
import {matchList} from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    result:null,
    error:null,
    loading:true
  }

  async componentDidMount(){
    try{
      const {match: {params:{id}}, match: {params:{nickname}}} = this.props;
      
      const {data:result} = await matchList.detail(nickname,id);

      this.setState({
        result
      })
    }catch{
      this.setState({
        error:'not found'
      })
    }finally{
      this.setState({
        loading:false
      })
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
