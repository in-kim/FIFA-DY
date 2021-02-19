import axios from 'axios';

const api = axios.create({
  baseURL:"https://fifa-record-api.link/api",
})

export const matchList = {
  list: (term,offset,limit) => api.get(`/record/match/${term}`,{
    params:{
      offset:offset,
      limit:limit
    }
  }),
  userInfo: (id) => api.get(`/record/user-info/${id}`),
  detail: (nickname,id) => 
  api.get(`/record/match-info/${nickname}/${id}`),
  clubPrice: (nickname,id) => api.get(`/record/match-club-price?nickName=${nickname}&matchId=${id}`),
  userResult: (id) => api.get(`/user/${id}`)
}
