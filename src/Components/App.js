import React, { Component } from 'react';
import Router from 'Components/Router';
import GlobalStyles from "Components/GlobalStyles";

const agent = navigator.userAgent.toLowerCase();

class App extends Component{
  render(){
    // ie일 경우
    if ( (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) {
      return <div>익스플로러는 지원하지 않습니다.<br/>다른 브라우저로 접속해주세요.</div>
    // ie가 아닐 경우
    }else{
      return (
        <>
          <GlobalStyles />
          <Router/>
        </>
      )
    }
    
  }
}

export default App;