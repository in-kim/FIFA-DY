import React from 'react';
import HomePrecenter from 'Routes/Home/HomePresenter';
import { matchList } from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    list:null,
    level:null,
    accessId:null,
    userInfo:null,
    searchTerm:"",
    searchNick:'',
    isDetail:'',
    error:null,
    loading:false,
    offset:0,
  }

  handleSubmit = event => {
    //reload 제어
    event.preventDefault();
    const { searchTerm } = this.state;
    
    if(searchTerm !== ""){
      this.setState({
        list:null,
        level:null,
        accessId:null,
        userInfo:null,
        searchNick:searchTerm,
        loading:true
      })
      this.searchByTerm();
    }else{
      this.setState({
        error:'검색어를 입력 해주세요.',
        loading:false
      })
    }
  }

  searchByTerm = async () => {
    const { searchTerm, offset, list:oldList} = this.state;
    try{
      const { data : {
          gameRecords:list,
          myAccessId:accessId,
          myLevel:level
      } } = await matchList.list(searchTerm,offset,10);

      if(offset === 0){
        console.log(await matchList.userInfo(accessId));
        const {data:userInfo} = await matchList.userInfo(accessId);
        this.setState({
          list,
          level,
          userInfo,
          error:null,
        })
      }else {
        this.setState({
          list: [...oldList, ...list],
          accessId,
          level
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
    const {list, userInfo, level, searchTerm, searchNick, loading, error} = this.state;

    console.log(this.state);
    return(
      <HomePrecenter 
        list={list}
        userInfo={userInfo}
        level={level}
        searchTerm={searchTerm}
        searchNick={searchNick}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        UpdateOffset={this.UpdateOffset}
        loading={loading}
        error={error}
      />
    )
  }
}
