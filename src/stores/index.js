import SearchStore from "./search";
import UserInfoStore from "./userInfo";

class RootStore{
  constructor(){
    this.search = new SearchStore(this);
    this.userInfo = new UserInfoStore(this);
  }
}

export default RootStore;