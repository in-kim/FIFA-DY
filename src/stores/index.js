import SearchStore from "./search";
import UserInfoStore from "./userInfo";
import ClubStore from "./club";

class RootStore{
  constructor(){
    this.search = new SearchStore(this);
    this.userInfo = new UserInfoStore(this);
    this.clubData = new ClubStore(this);
  }
}

export default RootStore;