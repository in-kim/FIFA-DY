import SearchStore from "./search";
import ClubStore from "./club";

class RootStore{
  constructor(){
    this.search = new SearchStore(this);
    this.clubData = new ClubStore(this);
  }
}

export default RootStore;