import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  width:1024px;
  height:100%;
  margin:0 auto;
  padding-top:80px;
`;

export const Title = styled.div`
  font-size:30px;
  text-align:center;
  margin-bottom:20px;
`

export const Form = styled.form`
  font-family:inherit;
`;

export const InputContainer = styled.div`
  display:flex;
  margin-bottom:20px;
  `;
export const InputBox = styled.div`
  display:flex;
  flex:1; 
  margin-right:20px;
  align-items:center;
  border-bottom:2px solid #fff;

  &:last-child{
    margin-right:0;
  }
  & > input {
    font-size:20px;
  }
`;
export const Label = styled.div`
  flex:1;
  font-size:20px;
  margin-right:10px;
  word-break:keep-all;
`;

export const Input = styled.input`
  width:100%;
  font-family:inherit;
  font-size:20px;
  color:#fff;
  background-color:transparent;
  border:0;
  padding:10px 20px;
  outline:none;
`;

export const TextArea = styled.textarea`
  width:100%;
  min-height:300px;
  font-family:inherit;
  font-size:20px;
  color:#222;
  background-color:#fff;
  border-radius:10px;
  line-height:20px;
  margin-bottom:30px;
  padding:10px 20px;
`;
export const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const Button = styled.button`
  font-family:inherit;
  font-size:20px;
  color:#222;
  background-color:#fff;
  padding:5px 10px;
  border:1px solid #ddd;
  border-radius:10px;
  ${props => props.design};
  cursor:pointer;

  & > a {
    width:100%;
    height:100%;
    color:inherit;
    font-size:inherit;
    font-family:inherit;
  }
`;

export const Item = styled.span`
  ${props => props.design}
`;


//팝업
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
export const PopBody = styled.div`
  max-width:400px;
  padding:30px;
  background-color:#fff;
  border-radius:10px;
  z-index:2;
`;
export const PopTitle = styled.h3`
  font-size:25px;
  color:#222;
  margin-bottom:20px;
`;
export const PopForm = styled.form`
  display:flex;
  flex:1;
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