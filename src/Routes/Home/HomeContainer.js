import React from 'react';
import HomePrecenter from 'Routes/Home/HomePresenter';
import { matchList } from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    list:null,
    searchTerm:"",
    notFound:'',
    error:null,
    loading:false,
    limit:10,
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
      list:null
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
    const { searchTerm, limit } = this.state;
    try{
      const { data : list } = await matchList.list(searchTerm,0,limit);

      this.setState({
        list,
        error:null,
      })
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
  
  handleUpdateList = async () => {
    const {limit:oldLimit} = this.state;

    await this.setState({
      limit:oldLimit+10
    })
    this.searchByTerm();
  }

  render(){
    const {list, searchTerm, loading, error} = this.state;
    console.log(this.state);
    return(
      <HomePrecenter 
        list={list}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        handleUpdateList={this.handleUpdateList}
        loading={loading}
        error={error}
      />
    )
  }
}
