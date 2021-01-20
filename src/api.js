import axios from 'axios';

const api = axios.create({
  baseURL:"/api/record",
})

export const matchList = {
  list: (term,offset,limit) => api.get(`/match/${term}`,{
    params:{
      offset:offset,
      limit:limit
    }
  }),
  detail: (nickname,id) => 
  api.get(`/match-info/${nickname}/${id}`),
  clubPrice: (nickname,id) => api.get(`/match-club-price?nickName=${nickname}&matchId=${id}`)
}
