import React from 'react';
import DetailPrecenter from 'Routes/Detail/DetailPresenter';
import {matchList} from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state= {
    PlayerResult:null,
    ClubPrice:null,
    name:'',
    error:null,
    loading:true,
  }

  async componentDidMount(){
    try{
      const {
        match: {params:{id}}, 
        match: {params:{name}}, 
      } = this.props;

      const {data:PlayerResult} = await matchList.detail(name,id);
      const {data:ClubPrice} = await matchList.clubPrice(name,id);
      this.setState({
        PlayerResult,
        ClubPrice,
        name,
      })
    }catch{
      this.setState({
        error:'not found'
      })
    }finally{
      this.setState({
        loading:false
      })
    };
    
  }


  render(){
    const { PlayerResult, ClubPrice, error, loading, name } = this.state;
    return(
      <DetailPrecenter 
        PlayerResult={PlayerResult}
        ClubPrice={ClubPrice}
        error={error}
        loading={loading}
        handleClick={this.handleClick}
        name={name}
      />
    )
  }
}
