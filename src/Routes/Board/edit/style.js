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

export const Input = styled.input`
  width:100%;
  font-family:inherit;
  font-size:30px;
  color:#fff;
  background-color:transparent;
  border:2px solid #fff;
  border-radius:10px;
  margin-bottom:20px;
  padding:10px 20px;
`;

export const TextArea = styled.textarea`
  width:100%;
  min-height:300px;
  font-family:inherit;
  font-size:20px;
  color:#fff;
  background-color:transparent;
  border:2px solid #fff;
  border-radius:10px;
  line-height:20px;
  margin-bottom:30px;
  padding:10px 20px;
`;

export const ButtonContainer = styled.div`
  text-align:center;
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