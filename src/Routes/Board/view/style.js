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
  margin-bottom:20px;
`

export const Content = styled.div`
  width:100%;
  min-height:300px;
  border:2px solid #fff;
  font-size:20px;
  line-height:20px;
  margin-bottom:30px;
  padding:20px;
  white-space:pre-line;
`

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