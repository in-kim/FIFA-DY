import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import * as Board from './style';

import SideMenu from 'Components/SideMenu';
import Footer from 'Components/Footer';

const handlePagination = (totalPaging, number, updatePage) => {
  let result = [];
  for (let i = 0; i < totalPaging; i++) {
    result.push(
      <Board.PagingItem
        className={number === i ? 'active' : ''}
        onClick={() => updatePage(i + 1)}
      >{i + 1}</Board.PagingItem>
    );
  }
  return result;
};

const ListPresenter = ({ list, pageName, pageNumber, pageId, paging, ...fn}) => {
  return(
    <>
      <Board.Container>
        <SideMenu />
        <Board.Header>
          <Board.Title>{pageName}</Board.Title>
          <Board.WriteButton>
            <Link to={`/board/${pageId}/write`}>글쓰기</Link>
          </Board.WriteButton>
        </Board.Header>
        <Board.TableHeader>
          <Board.TableItem size="5">No</Board.TableItem>
          <Board.TableItem size="65">제목</Board.TableItem>
          <Board.TableItem size="15">작성자</Board.TableItem>
          <Board.TableItem size="15">등록일</Board.TableItem>
        </Board.TableHeader>
        <Board.TableRow>
          {
            Object.keys(list).length > 0 ? list.map((item, index) => (
              <Link to={`/board/${pageId}/detail/${item.id}`} key={item.id}>
                <Board.TableItem size="5">{(Number(pageNumber) - 1) * 10 + (index + 1)}</Board.TableItem>
                <Board.TableItem size="65">{item.title}</Board.TableItem>
                <Board.TableItem size="15">{item.creator}</Board.TableItem>
                <Board.TableItem size="15">{item.updatedDate.slice(0, 10)}</Board.TableItem>
              </Link>
            )) : <Board.TableItem size="100">등록된 게시물이 없습니다.</Board.TableItem>
          }
        </Board.TableRow>
        {/* paging */}
        <Board.PagingContainer>
          <Board.PagingItem
            onClick={() => fn.updatePage(1)}
          >&lt;&lt;</Board.PagingItem>
          <Board.PagingItem
            onClick={() => {
              let num = Number(pageNumber) - 1;
              console.log(num);
              fn.updatePage(num)
            }}
          >&lt;</Board.PagingItem>
          {
            handlePagination(paging.totalPages, paging.number, fn.updatePage)
          }
          <Board.PagingItem
            onClick={() => {
              let num = Number(pageNumber) + 1;
              console.log(num);
              fn.updatePage(num)
            }}
          >&gt;</Board.PagingItem>
          <Board.PagingItem
            onClick={() => fn.updatePage(paging.totalPages)}
            >&gt;&gt;</Board.PagingItem>
          </Board.PagingContainer>
      </Board.Container>
      <Footer />
    </>
  )
}

export default ListPresenter;