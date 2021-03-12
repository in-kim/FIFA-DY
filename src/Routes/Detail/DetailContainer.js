import React, { useEffect, useState } from 'react';
import DetailPrecenter from 'Routes/Detail/DetailPresenter';
import {matchList} from 'api';

const DetailContainer = (props) => {
  const [PlayerResult,setPlayerResult] = useState(null);
  const [ClubPrice,setClubPrice] = useState(null);
  const [name,setName] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    
    const updateData = async () => {
      try{
        const {
          match: {params:{id}}, 
          match: {params:{name}}, 
        } = props;
        const {data:PlayerData} = await matchList.detail(name,id);
        const {data:ClubPrice} = await matchList.clubPrice(name,id);

        setPlayerResult(PlayerData)
        setClubPrice(ClubPrice)
        setName(name)
      }catch{
        setError('not found');
      }finally{
        setLoading(false);
      };
    }
    
    updateData();
  },[props])

  return(
    <DetailPrecenter 
      PlayerResult={PlayerResult}
      ClubPrice={ClubPrice}
      error={error}
      loading={loading}
      name={name}
    />
  )
}
export default DetailContainer
