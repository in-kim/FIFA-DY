import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  width:1024px;
  height:100%;
  margin:0 auto;
  padding-top:80px;
`;
export const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

export const Title = styled.h1`
  flex:1;
  max-width:calc(100% - 60px);
  font-size:30px;
`;

export const WriteButton = styled.span`
  flex:1;
  max-width:60px;

 & > a {
  border:1px solid #fff;
  font-size:20px;
  color:#fff;
  background-color:transparent;
  padding:5px 10px;

  &:hover {
    border:1px solid #ddd;
    background-color:#fff;
    color:#222;
  }
 }
`;

export const TableHeader = styled.div`
  display:flex;
  align-items:center;
  font-size:20px;
  border:1px solid #fff;
  border-bottom:0;
`;

export const TableRow = styled.div`
  & > a {
    display:flex;
    align-items:center;
    background-color:#fff;
    font-size:20px;
    color:#222;
    border:1px solid #fff;
    border-bottom:1px solid #000;
  }
`;

export const TableItem = styled.span`
  flex:1;
  max-width:${props => props.size}%;
  text-align:center;
  padding:10px 20px;
`;