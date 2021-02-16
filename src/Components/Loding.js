import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'

const Item = styled.span`
  display:flex;
  width:100%;
  height:100%;
  font-size:90px;
  align-items:center;
  justify-content:center;
`;


export default function Loading() {

  return(
    <Item>
      <CircularProgress/>
    </Item>
  )
}
