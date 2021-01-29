import React from 'react';
import HomePrecenter from 'Routes/Home/HomePresenter';
import { matchList } from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    result:null,
    searchTerm:"",
    notFound:'',
    isDetail:'',
    error:null,
    loading:false,
    offset:0,
  }

  handleSubmit = event => {
    //reload 제어
    event.preventDefault();
    const {target} = event;
    const { 0 :{defaultValue : inputValue} } = target.children;
    const { searchTerm } = this.state;
    this.setState({
      loading:true,
      notFound:inputValue,
      result:null
    })
    if(searchTerm !== ""){
      this.searchByTerm();
    }else{
      this.setState({
        error:'검색어를 입력 해주세요.',
        loading:false
      })
    }
  }

  searchByTerm = async () => {
    const { searchTerm, offset, result:oldResult} = this.state;
    try{
      const { data : result } = await matchList.list(searchTerm,offset,10);

      if(offset === 0){
        this.setState({
          result,
          error:null,
        })
      }else {
        this.setState({
          list: [...oldResult, ...result]
        })
      }
    }catch{
      this.setState({
        error:'검색결과가 없습니다.'
      })
    }finally{
      this.setState({
        loading:false
      })
    }
  }

  updateTerm = event => {
    const { target: {value} } = event;
    this.setState({
      searchTerm:value
    })
  }
  
  UpdateOffset = async () => {
    const {offset} = this.state;

    await this.setState({
      offset:offset+10
    })

    this.searchByTerm();
  }



  render(){
    const {result, searchTerm, notFound, loading, error} = this.state;
    console.log(this.state);
    return(
      <HomePrecenter 
        result={result}
        searchTerm={searchTerm}
        notFound={notFound}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        UpdateOffset={this.UpdateOffset}
        loading={loading}
        error={error}
      />
    )
  }
}
