import { observable, makeObservable, action, toJS, } from "mobx";
import { BoardApi } from 'api';
export default class board{
  @observable pageName='';
  @observable list=null;
  @observable page=0;
  @observable pageId='';
  @observable editData={
    creator: '',
    date: '',
    password: '',
    title: '',
    content: ''
  };
  @observable history=null;

  constructor(root) {
    makeObservable(this)
    this.root = root;
  }

  @action fecthList = () =>{

  }

  @action setPageId = (pageId) =>{
    this.pageId = pageId;
  }

  @action setTitle = (pageId)=>{
    if (pageId === "50") {
      this.pageName = '건의게시판';
      this.setPageId(pageId);
    } else if (pageId === "51") {
      this.pageName = '커뮤니티';
      this.setPageId(pageId);
    } else {
      window.location.href='/'
    }
  }

  @action handleEditChange = (e) => {
    const { target: { name, value } } = e;
    this.editData[name] = value;
  }
  @action updateDate = () => {
    this.editData['date'] = new Date().toISOString().substring(0, 10)
  }

  @action handleEditSubmit = (e) => {
    e.preventDefault();
    const { creator, password, date, title, content} = this.editData;
    if (creator === "") {
      alert('이름을 입력해주세요.');
    } else if (password === "") {
      alert('비밀번호를 입력해주세요.');
    } else if (title === "") {
      alert('제목을 입력해주세요.');
    } else if (content === "") {
      alert('내용을 입력해주세요.');
    } else {
      this.handleEditData();
    }
  }

  @action handleEditData = async() => {
    const { creator, password, title, content } = this.editData;
    
    try {
      console.log(this.pageId, creator, password, title, content);
      await BoardApi.edit(this.pageId,creator,password,title,content);
    } catch {
      console.log('handleEditData api error');
    }finally{
      alert('등록 되었습니다.');
      this.history.push(`/board/${this.pageId}/list`);
      this.resetForm();
    }
  }

  @action resetForm = () =>{
    this.editData['creator']='';
    this.editData['password']='';
    this.editData['title']='';
    this.editData['content']='';
  }
}