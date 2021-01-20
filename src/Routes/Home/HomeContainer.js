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
    loading:true,
  }

  handleSubmit = event => {
    //reload 제어
    event.preventDefault();
    const {target} = event;
    const { 0 :{defaultValue : inputValue} } = target.children;
    const { searchTerm } = this.state;
    this.setState({
      notFound:inputValue
    })
    if(searchTerm !== ""){
      this.searchByTerm();
    }
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try{
      const { data : list } = await matchList.list(searchTerm,10,10);

      this.setState({
        list
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

  render(){
    const {list, searchTerm, loading, error} = this.state;
    return(
      <HomePrecenter 
        list={list}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        loading={loading}
        error={error}
      />
    )
  }
}
