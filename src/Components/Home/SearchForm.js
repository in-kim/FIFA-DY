import React, { Component } from 'react';
import styled from 'styled-components'
import { observer, inject } from "mobx-react";

@inject('search')
@observer
class SearchForm extends Component {
  render(){
    const {search} = this.props;
    return(
      <>
        <Form onSubmit={search.handleSubmit}>
          <Input 
            placeholder="구단주명을 입력하세요."
            value={search.searchTerm}
            onChange={search.updateTerm}
          />
          <SearchButton searchIcon={`/assets/image/button/btn-search.png`}></SearchButton>
        </Form>
      </>
    )
  }
}

const Form = styled.form`
  position:relative;
  width:350px;
  flex:0 0 43px;
  margin:10px auto 0 auto;

  @media only screen and (max-width:500px){
    width:100%;
  }
`;

const Input = styled.input`
  all:unset;
  width:350px;
  font-size:20px;
  background-color:#222;
  padding:0 10px 15px 10px;
  border-bottom:5px solid #fff;
  box-sizing:border-box;

  @media only screen and (max-width:500px){
    width:100%;
    padding:0 10px 10px 10px;
    border-bottom:1px solid #fff;
  }
`;

const SearchButton = styled.button`
  position:absolute;
  right:0;
  top:5px;
  width:20px;
  height:20px;
  background:url(${props=>props.searchIcon}) no-repeat;
  background-size:cover;
  border:0;
  cursor:pointer;
`;

export default SearchForm