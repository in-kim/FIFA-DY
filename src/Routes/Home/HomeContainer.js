import React, { useEffect, useState } from 'react';
import HomePrecenter from 'Routes/Home/HomePresenter';
import { matchList } from 'api';

const HomeContainer = () => {
  const [list, setList] = useState(null);
  const [userClubData, setUserClubData] = useState(null);
  const [level, setLevel] = useState(null);
  const [accessId, setAccessId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNick, setSearchNick] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  // 'accessId' is assigned a value but never used 방지 consol.log
  console.log(accessId);

  // 공통으로 state 초기화 시키는 함수
  const updateData = () => {
    setList(null);
    setLevel(null);
    setAccessId(null);
    setUserInfo(null);
  }

  // 검색 시 호출
  const handleSubmit = event => {
    //reload 제어
    event.preventDefault();
    
    if(searchTerm !== ""){
      updateData();

      setSearchNick(searchTerm);
      setOffset(0);
      setLoading(true);
    }else{
      updateData();

      setSearchNick("");
      setOffset(0);
      setError('검색어를 입력 해주세요.');
      setLoading(false);
    }
  }
  
  // 전적검색 버튼 클릭 시 호출
  const handleRecordUpdate = (nickName) => {
    updateData();

    setSearchTerm(nickName)
    setSearchNick(nickName);
    setOffset(0);
    setLoading(true);
  }


  // 검색 시 api 호출
  const searchByTerm = async() => {
    let oldList = list;

    try{
      const { data : {
        gameRecords:list,
        myAccessId:accessId,
        myLevel:level
      } } = await matchList.list(searchTerm,offset,10);

      if(offset === 0){
        const {data:userInfo} = await matchList.userInfo(accessId);
          setList(list);
          
          setLevel(level);
          setUserInfo(userInfo);
          setAccessId(accessId);
          setError(null);
      }else {
          setList([...oldList, ...list]);
          setAccessId(accessId);
          setLevel(level);
          setUserInfo(userInfo);
      }
    }catch{
      setError('검색결과가 없습니다.');
    }finally{
      setLoading(false);
    }
  }

  // 검색 input value update
  const updateTerm = event => {
    const { target: {value} } = event;
    setSearchTerm(value)
  }

  // 더보기 버튼 클릭시 호출
  const UpdateOffset = () => {
    setOffset(offset+10)
  }

  // 닉네임 & 정보보기 클릭 시 호출
  const loadUserClubData = async (accessId) => {
    const {data} = await matchList.userResult(accessId);

    setUserClubData(data)
  }

  // 유저 클럽 정보 팝업 닫기
  const resetUserClusbData = () => {
    setUserClubData(null)
  }

  useEffect(() => {
    async function fetchData() {
      setOffset(0);
      await searchByTerm();
    }
    if(searchNick !== ""){
      fetchData()
    }
  },[searchNick, searchByTerm])

  useEffect(()=> {
    async function fetchData() {
      await searchByTerm();
    }
    if(offset !== 0){
      fetchData()
    }
  },[offset, searchByTerm])

  return(
    <HomePrecenter 
      list={list}
      userInfo={userInfo}
      userClubData={userClubData}
      level={level}
      searchTerm={searchTerm}
      searchNick={searchNick}
      handleSubmit={handleSubmit}
      handleRecordUpdate={handleRecordUpdate}
      updateTerm={updateTerm}
      UpdateOffset={UpdateOffset}
      loadUserClubData={loadUserClubData}
      resetUserClusbData={resetUserClusbData}
      loading={loading}
      error={error}
    />
  )
}

export default HomeContainer;
