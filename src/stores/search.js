import { observable, action, makeObservable, toJS} from 'mobx';
import { matchListApi } from 'api';

export default class SearchStore{
  @observable searchTerm = '';
  @observable offset = 0;

  @observable matchList = null;

  @observable error = '';
  @observable loading = false;

  constructor(root){
    makeObservable(this)
    this.root = root;
  }

  @action updateTerm = event => {
    const { target: {value} } = event;
    this.searchTerm = value;
  }

  // 더보기 버튼 클릭시 호출
  @action UpdateOffset = () => {
    this.offset = this.offset + 10
  }

  @action fetchData = async() => {
    try {
      const {data} = await matchListApi.list(this.searchTerm,0,10);
      this.matchList = data;
      console.log(data);
      console.log(toJS(this.matchList));
    } catch {
      this.error = '검색된 결과가 없습니다.'
    } finally{
      this.loading=false;
    }
  }

  @action handleSubmit = event => {
    //reload 제어
    event.preventDefault();

    if(this.searchTerm !== ""){
      this.loading=true;
      this.fetchData();
    }else{
      this.error = '검색어를 입력 해주세요.';
      console.log(this.error);
    }
  }

  

  
}