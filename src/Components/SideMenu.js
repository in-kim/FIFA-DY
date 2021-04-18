import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const CloseButton = styled.button`
  position:absolute;
  top:15px;
  left:-40px;
  width:30px;
  height:30px;
  background:url(${props => props.bgImage}) no-repeat center;
  background-size:cover; 
  border:0; 
  outline:0;
  cursor:pointer;
`;

const SideMenuContainer = styled.div`
  position:absolute;
  width:0;
  top:10px;
  left:0;
  opacity:0;
  visibility:hidden;
  transition : .3s ease-in;
  background-color:rgba(0,0,0,0.2);

  &.active {
    width:100%;
    visibility:visible;
    opacity : 1;
    padding:10px 25px;
  }
`;
const List = styled.ul`
  display:flex;
`;

const Item = styled.li`
  flex:1;
  font-size:20px;
  text-align:center;
  color:#fff;
  margin-right:15px;
  white-space:nowrap;

  &:hover {
    color:#e4f710;
  }
`;

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return(
    <>
      <CloseButton 
        onClick={() => setMenuOpen(
          menuOpen ? false : true
        )}
        bgImage={menuOpen === true? 
          '/assets/image/button/btn_close.png' :
          '/assets/image/button/btn_slide_menu.png'
        }
      ></CloseButton>
      <SideMenuContainer className={menuOpen===true && 'active'}>
        <List>
          <Item>
            <Link to="/">홈</Link>
          </Item>
          <Item>
            <Link to="/board/50/list">건의 게시판</Link>
          </Item>
          <Item>
            <Link to="/board/51/list">커뮤니티</Link>
          </Item>
        </List>
      </SideMenuContainer>
    </>
  )
}


export default SideMenu;

