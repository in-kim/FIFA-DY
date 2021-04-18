import SearchStore from "./search";
import ClubStore from "./club";
import BoardStore from "./board";
class RootStore{
  constructor(){
    this.search = new SearchStore(this);
    this.clubData = new ClubStore(this);
    this.board = new BoardStore(this);
  }
}

export default RootStore;