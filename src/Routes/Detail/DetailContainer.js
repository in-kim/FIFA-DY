import React from 'react';
import DetailPrecenter from 'Routes/Detail/DetailPresenter';
import {matchList} from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    result:null,
    name:'',
    error:null,
    loading:true,
    offset:0
  }

  async componentDidMount(){
    try{
      const {
        match: {params:{id}}, 
        match: {params:{name}}, 
        match: {params:{offset}}
      } = this.props;

      const {data:result} = await matchList.detail(name,id);
      this.setState({
        result,
        name,
        offset:Number(offset)
      })
    }catch{
      this.setState({
        error:'not found'
      })
    }finally{
      this.setState({
        loading:false
      })
    };
    
  }


  render(){
    const { result, error, loading, name,offset } = this.state;
    return(
      <DetailPrecenter 
        result={result}
        error={error}
        loading={loading}
        handleClick={this.handleClick}
        name={name}
        offset={offset}
      />
    )
  }
}
