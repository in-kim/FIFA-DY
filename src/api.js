import axios from 'axios';

const api = axios.create({
  baseURL:"http://fifa-record-api.link/api",
})

export const matchListApi = {
  list: (term,offset,limit) => api.get(`/record/match/${term}`,{
    params:{
      offset:offset,
      limit:limit
    }
  }),
  
  //
  userInfo: (id) => api.get(`/record/user-info/${id}`),
  
  //
  detail: (nickname,id) => 
  api.get(`/record/match-info/${nickname}/${id}`),

  //
  clubPrice: (nickname,id) => api.get(`/record/match-club-price?nickName=${nickname}&matchId=${id}`),

  //
  userResult: (id) => api.get(`/user/${id}`),

  // top ranking
  topRank: (page, size) => api.get(`/record/club-rank`, {
    params: {
      page: page,
      size: size,
      sort: 'clubPrice,DESC',
    }
  })
}

export const BoardApi = {
  list: (boardId,division,keyword,page) => api.get(`/board/${boardId}/posts`,{
    params: {
      division: division,
      keyword: keyword,
      page: page
    }
  }),
  detail: (postId) => api.get(`/board/posts/${postId}`),
  edit: (boardId, creator, password, title, text) =>
    api.post(`/board/${boardId}/post`,{
      creator: creator,
      postPassword: password,
      title: title,
      text: text,
    }
  ),
  modify: (postId, creator, password, title, text) => 
    api.put(`/board/post/${postId}`,{
      creator: creator,
      postPassword:password,
      title:title,
      text:text
    }),
  velification:(contentId,password) => api.get(`/board/${contentId}/valid-password`,{
    params: {
      password  :password
    }
  }),
  delete:(postId,password) => api.delete(`/board/post/${postId}`,{
    params:{
      postPassword :password
    }
  })
}