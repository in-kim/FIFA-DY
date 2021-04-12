import { observable, action, makeObservable} from 'mobx';
import { matchListApi } from 'api';

export default class SearchStore{
  @observable searchTerm = '';

  @observable offset = 0;

  @observable RecordList = null;
  @observable myAccessId = '';
  @observable myLevel = '';

  @observable error = '';
  @observable loading = false;

  constructor(root){
    makeObservable(this)
    this.root = root;
  }

  // 데이터 초기화
  @action resetData = () => {
    this.loading = true;
    this.offset = 0;
    this.error = '';
  }

  // 검색 input value update
  @action updateTerm = event => {
    const { target: {value} } = event;
    this.searchTerm = value;
  }

  // 더보기 버튼 클릭시 호출
  @action UpdateOffset = () => {
    this.offset = this.offset + 10;

    this.fetchData();
  }

  // 매치 리스트 api 호출
  @action fetchData = async() => {
    const {clubData} = this.root;

    if(this.offset === 0){
      try {
        const {
          data:{
            gameRecords,
            myAccessId,
            myLevel
          }
        } = await matchListApi.list(this.searchTerm,this.offset,10);
        
        // club 요약 데이터 초기화
        clubData.clubSimpleData = null;
        // 매치리스트 초기화
        this.RecordList = null;
        // 매치리스트 업데이트
        this.RecordList = gameRecords;
        // 
        this.myAccessId = myAccessId;
        // 
        this.myLevel = myLevel;
      } catch {
        this.error = '검색된 결과가 없습니다.'
      } finally{
        this.loading=false;

        if(this.error === ''){
          // 검색된 클럽 요약 정보 호출
          clubData.loadUserClubSimpleData()
        }else{
          // club 요약 데이터 삭제
          clubData.clubSimpleData = null;
        }
      }
    }else{
      
      try {
        const { data:{gameRecords} } = await matchListApi.list(this.searchTerm, this.offset, 10);

        // 매치리스트 업데이트
        gameRecords.forEach(item => {
          this.RecordList.push(item);
        })
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
      this.resetData();
      this.fetchData();
    }else{
      this.error = '검색어를 입력 해주세요.';
    }
  }

  @action handleRecordUpdate = (nickName) => {
    const { clubData } = this.root;
    
    this.searchTerm = nickName; // 검색어 변경
    this.resetData();

    // club 요약 데이터 초기화
    clubData.clubSimpleData = null;
    this.fetchData();
  }

  
}