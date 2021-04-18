import axios from 'axios';

const api = axios.create({
  baseURL:"https://fifa-record-api.link/api",
})

export const matchListApi = {
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

export const BoardApi = {
  list: (boardId) => api.get(`/board/${boardId}/posts`),
  detail: (postId) => api.get(`/board/posts/${postId}`),
  edit:(boardId,creator,password,title,content) => 
    api.post(`/board/${boardId}/post`,{
      creator: creator,
      postPassword: password,
      title: title,
      text: content,
    }
  ),
  modify:(postId) => api.put(`/api/board/post/${postId}`),
  delete:(postId) => api.delete(`api/board/posts/${postId}`),
}