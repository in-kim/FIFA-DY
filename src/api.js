import axios from 'axios';

const api = axios.create({
  baseURL:"http://15.164.15.7:8080/api/record",
})

export const matchList = {
  list: (term,offset,limit) => api.get(`/match/${term}`,{
    params:{
      offset:offset,
      limit:limit
    }
  }),
  userInfo: (id) => api.get(`/user-info/${id}`),
  detail: (nickname,id) => 
  api.get(`/match-info/${nickname}/${id}`),
  clubPrice: (nickname,id) => api.get(`/match-club-price?nickName=${nickname}&matchId=${id}`)
}
