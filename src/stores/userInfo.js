import { observable, action, makeObservable } from "mobx";

export default class userInfo{
  @observable serchNick = '';

  constructor(root){
    makeObservable(this)
    this.root = root;
  }
  
  @action
  updateSearchNick(result){
    this.searchNick = result;
  }
}