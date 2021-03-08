import React, { useState } from 'react';
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

  const handleSubmit = async event => {
    //reload 제어
    event.preventDefault();
    
    if(searchTerm !== ""){
      await setList(null);
      await setLevel(null);
      await setAccessId(null);
      await setUserInfo(null);
      await setSearchNick(searchTerm);
      await setOffset(0);
      await setLoading(true);

      searchByTerm();
    }else{
      setList(null);
      setLevel(null);
      setAccessId(null);
      setUserInfo(null);
      setSearchNick("");
      setOffset(0);
      setError('검색어를 입력 해주세요.');
      setLoading(false);
    }
  }

  const handleRecordUpdate = async (nickName) => {
    setSearchTerm(nickName)
    setList(null);
    setLevel(null);
    setAccessId(null);
    setUserInfo(null);
    setSearchNick(nickName);
    setOffset(0);
    setLoading(true);

    searchByTerm()
  }

  const searchByTerm = async () => {
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

  const updateTerm = event => {
    const { target: {value} } = event;
    setSearchTerm(value)
  }

  const UpdateOffset = async () => {
    await setOffset(offset+10)

    searchByTerm();
  }

  const loadUserClubData = async (accessId) => {
    const {data} = await await matchList.userResult(accessId);

    setUserClubData(data)
  }

  const resetUserClusbData = () => {
    setUserClubData(null)
  }

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
