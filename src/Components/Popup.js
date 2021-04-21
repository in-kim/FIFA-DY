import React from 'react';
import styled from 'styled-components';

const Popup = ({type,velidPwd,...fn}) => {
  type==='alert' && (
    <PopContainer onSubmit={fn.submit}>
      <Dimmer onClick={() => fn.close()}/>
      <PopForm >
        <PopLabel>비밀번호 : </PopLabel>
        <PopInput type="password" value={velidPwd} onChange={fn.inputChange} placeholder="비밀번호 입력" />
        <PopButton type="submit">확인</PopButton>
      </PopForm>
    </PopContainer>
  )

  type==='confirm' && (
    <div>22</div>
  )
}

export const PopContainer = styled.div`
  position:absolute;
  top:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
`;
export const Dimmer = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.8);
  z-index:1;
`;
export const PopForm = styled.form`
  display:flex;
  flex:1;
  max-width:400px;
  padding:30px;
  border:1px solid #fff;
  background-color:#fff;
  border-radius:10px;
  z-index:2;
`;
export const PopLabel = styled.label`
  font-size:20px;
  color:#222;
  margin-right:5px;
`;
export const PopInput = styled.input`
  flex:1;
  padding:5px 10px;
  border:0;
  border-bottom:1px solid #222;
  margin-right:10px;
`;
export const PopButton = styled.button`
  color:#fff;
  padding:3px 10px;
  background-color:#3498db;
  border:0;
  border-radius:5px;
`;


export default Popup;