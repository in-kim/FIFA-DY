import { observable, action, makeObservable, toJS} from 'mobx';
import { matchListApi } from 'api';

export default class SearchStore{
  @observable searchTerm = '';
  @observable nickName = '';

  @observable offset = 0;

  @observable RecordList = [];
  @observable myAccessId = '';
  @observable myLevel = '';

  @observable error = null;
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
    this.offset = this.offset + 10;

    this.fetchData();
  }

  @action fetchData = async() => {
    if(this.offset === 0){
      try {
        const {
          data:{
            gameRecords,
            myAccessId,
            myLevel
          }
        } = await matchListApi.list(this.searchTerm,this.offset,10);
        
        this.RecordList = gameRecords;
        this.myAccessId = myAccessId;
        this.myLevel = myLevel;
      } catch {
        this.error = '검색된 결과가 없습니다.'
      } finally{
        this.loading=false;
      }
    }else{
      try {
        const { data:{gameRecords} } = await matchListApi.list(this.searchTerm, this.offset, 10);
        console.log(toJS(gameRecords));
        this.RecordList = { ...this.RecordList, ...gameRecords};
        console.log(toJS(this.RecordList));
      } catch {
        this.error = '더 볼 수 있는 데이터가 없습니다.'
      } finally {
        this.loading = false;
      }
    }
  }

  @action handleSubmit = event => {
    //reload 제어
    event.preventDefault();

    if(this.searchTerm !== ""){
      this.loading=true;
      this.offset=0;
      this.fetchData();
    }else{
      this.error = '검색어를 입력 해주세요.';
      console.log(this.error);
    }
  }

  @action handleRecordUpdate = (nickName) => {
    this.searchTerm = nickName; // 검색어 변경
    this.nickName = nickName;
    this.offset = 0;
    this.loading = true;

    this.fetchData();
  }

  
}