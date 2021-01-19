import React from 'react';
import HomePrecenter from 'Routes/Home/HomePresenter';
import { matchList } from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    matchList:null,
    matchDetail:null,
    error:null,
    loading:true
  }

  async componentDidMount(){
    try{
    }catch{
      this.setState({
        error:'검색하신 구단주를 찾을 수 없습니다.'
      })
    }finally{
      this.setState({
        loading:false
      })
    }
  }

  render(){
    const {matchList, error, loading} = this.state;
    return(
      <HomePrecenter 
        matchList={matchList}
        error={error}
        loading={loading}
      />
    )
  }
}
