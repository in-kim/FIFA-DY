import { observable, makeObservable, action } from "mobx";
import { matchListApi } from 'api';

export default class clubStore{
  @observable clubData=null;

  constructor(root) {
    makeObservable(this)
    this.root = root;
  }

  // 닉네임 & 정보보기 클릭 시 호출
  @action loadUserClubData = async (accessId) => {
    const { data } = await matchListApi.userResult(accessId);

    this.clubData=data
  }
}