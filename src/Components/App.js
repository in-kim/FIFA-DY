import React, { Component } from 'react';
import GlobalStyles from "Components/GlobalStyles";

class App extends Component{
  render(){
    return (
      <>
        <GlobalStyles />
        <div className="App">안녕하세요. 폰트 테스트 입니다.</div>
      </>
    )
  }
}

export default App;