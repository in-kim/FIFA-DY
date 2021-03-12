import React from 'react';
import SideMenu from 'Components/SideMenu';
import Footer from 'Components/Footer'
import {Link} from 'react-router-dom';
import * as Tag from './style';


const BoardPresenter = ({page, id}) => {
  return (
    <>
      <Tag.Container>
        <SideMenu/>
        <Tag.Header>
          <Tag.Title>{page} 게시판</Tag.Title>
          <Tag.WriteButton>
            <Link to={`/board/${id}/write`}>글쓰기</Link>
          </Tag.WriteButton>
        </Tag.Header>
        <Tag.TableHeader>
          <Tag.TableItem size="5">No</Tag.TableItem>
          <Tag.TableItem size="15">제목</Tag.TableItem>
          <Tag.TableItem size="65">내용</Tag.TableItem>
          <Tag.TableItem size="15">등록일</Tag.TableItem>
        </Tag.TableHeader>
        <Tag.TableRow>
          <Link to={`/board/${id}/detail/11111`}>
            <Tag.TableItem size="5">1</Tag.TableItem>
            <Tag.TableItem size="15">안녕하세요.</Tag.TableItem>
            <Tag.TableItem size="65">안녕하세요. 이요한 입니다. 죄송합니다.</Tag.TableItem>
            <Tag.TableItem size="15">2021.06.11</Tag.TableItem>
          </Link>
        </Tag.TableRow>
        <Tag.TableRow>
          <Link to={`/board/${id}/detail/22222`}>
            <Tag.TableItem size="5">2</Tag.TableItem>
            <Tag.TableItem size="15">안녕하세요.</Tag.TableItem>
            <Tag.TableItem size="65">안녕하세요. 이요한 입니다. 죄송합니다.</Tag.TableItem>
            <Tag.TableItem size="15">2021.06.11</Tag.TableItem>
          </Link>
        </Tag.TableRow>
      </Tag.Container>
      <Footer />
    </>
  )
}

export default BoardPresenter;