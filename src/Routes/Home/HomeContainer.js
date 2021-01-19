import React from 'react';
import HomePrecenter from 'Routes/Home/HomePresenter';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    matchList:null,
    searchTerm:"",
    notFound:'',
    error:null,
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

  searchByTerm = () => {
    const { searchTerm } = this.state;
    console.log(searchTerm);
  }

  updateTerm = event => {
    const { target: {value} } = event;
    this.setState({
      searchTerm:value
    })
  }

  render(){
    const {matchList, searchTerm} = this.state;
    return(
      <HomePrecenter 
        matchList={matchList}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    )
  }
}
