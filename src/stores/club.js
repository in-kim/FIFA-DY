import { observable, makeObservable, action, toJS } from "mobx";
import { matchListApi } from 'api';

export default class clubStore{
  @observable clubSimpleData=null;
  @observable clubDetailData=null;
  @observable loading=false;
  @observable error='';

  constructor(root) {
    makeObservable(this)
    this.root = root;
  }

  @action loadUserClubSimpleData = async () => {
    const {search:{myAccessId}} = this.root;
    this.loading = true;
    try{
      const {data} = await matchListApi.userInfo(myAccessId);
      this.clubSimpleData = data;
    }catch{
      this.error = 'loadUserClubSimpleData error'
    }finally{
      this.loading = false;
    }
  }

  // 닉네임 & 정보보기 클릭 시 호출
  @action loadUserClubDetailData = async (accessId) => {
    try {
      // 닉네임 & 정보보기 클릭 시 호출
      const {data} = await matchListApi.userResult(accessId);
      this.clubDetailData = data;

      console.log(toJS(this.clubDetailData));
    } catch{
      this.error='loadUserClubDetailData error'
    } finally{
      this.loading = false;
    }
  }

  // 닉네임 & 정보보기 클릭 시 호출되는 팝업 닫기
  @action clearUserClubDetailData = () => {
    this.clubDetailData = null;
  }
}