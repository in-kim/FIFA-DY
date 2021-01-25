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
    offset:0,
  }

  async componentDidMount(){
    const {match : {params}} = this.props;
   
    if(Object.keys(params).length !== 0){
      this.setState({
        loading:true
      })

      try{
        const {
          match: {params:{name}}, 
          match: {params:{offset}}, 
        } = this.props;

        if(Number(offset) === 0){
          const { data : list } = await matchList.list(name,offset,10);
          this.setState({
            list
          })
        }else{
          const { data : list } = await matchList.list(name,0,offset);
          this.setState({
            list
          })
        }
  
        this.setState({
          searchTerm:name,
          offset:Number(offset)
        })
      }catch{
      }finally{
        this.setState({
          loading:false
        })
      }
    }
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
    const { searchTerm, offset, list:oldList} = this.state;
    try{
      const { data : list } = await matchList.list(searchTerm,offset,10);

      if(offset === 0){
        this.setState({
          list,
          error:null,
        })
      }else {
        this.setState({
          list: [...oldList, ...list]
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
    const {list, searchTerm, loading, error, offset} = this.state;
    return(
      <HomePrecenter 
        list={list}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        UpdateOffset={this.UpdateOffset}
        offset={offset}
        loading={loading}
        error={error}
      />
    )
  }
}
