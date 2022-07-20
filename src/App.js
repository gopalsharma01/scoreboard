import React,{ useState,useEffect } from 'react';
import FlipMove from 'react-flip-move';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components'
import CountUp from 'react-countup';

const Wrapper = styled.div`
  flex: 1
`;
const WrapperCenter = styled.div`
  align-self: center
`;

const aData = [
                                              {
                                              "userID": "u-1",
                                              "displayName": "Jone",
                                              "picture": "",
                                              "score": 157000
                                              },
                                              {
                                              "userID": "u-2",
                                              "displayName": "Victoria",
                                              "picture": "",
                                              "score": 46200
                                              },
                                              {
                                              "userID": "u-3",
                                              "displayName": "Joy",
                                              "picture": "",
                                              "score": 38800
                                              },
                                              {
                                              "userID": "u-4",
                                              "displayName": "Quinn",
                                              "picture": "",
                                              "score": 33400
                                              },
                                              {
                                              "userID": "u-5",
                                              "displayName": "Sheenalo", 
                                              "picture":"",
                                              "score": 31600
                                              },
                                              {
                                              "userID": "u-6",
                                              "displayName": "Charlene", 
                                              "picture":"",
                                              "score": 30800
                                              },
                                              {
                                              "userID": "u-7",
                                              "displayName": "LeonaBaby", 
                                              "picture": "",
                                              "score": 22300
                                              },
                                              {
                                              "userID": "u-8",
                                              "displayName": "Sunny",
                                              "picture": "",
                                              "score": 17800
                                              },
                                              {
                                              "userID": "u-9",
                                              "displayName": "ImWord",
                                              "picture": "",
                                              "score": 17300
                                              },
                                              {
                                              "userID": "u-10",
                                              "displayName": "Dophine",
                                              "picture": "",
                                              "score": 15400
                                              }];

const App = ()=> {
  const [dataSource,setDataSource] = useState(aData);
  
  useEffect(()=>{
    const intervalId = setInterval(() => {
      changeScore(dataSource);
    }, 5000);
    return () => clearInterval(intervalId);
  },[])

  const changeScore = (aSourceData)=>{
    const max = 200000;
    const min = 15000;
    aSourceData.map((item,index)=>{
      item.score = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
      return item;
    })
    aSourceData.sort((a,b)=> b.score - a.score);
    setDataSource([...aSourceData]); 
  }

  const counter = (minimum, maximum) => {
        for (let count = minimum; count <= maximum; count++) {
            setTimeout(() => {
                this.setState({count})
            }, 1000);
        }
    }

  const itemData = (item,index)=>{
    return (
      <li className="list-group-item d-flex" key={item.userID}>
        <Wrapper>
          <div className="d-inline mx-2">
            <img src={process.env.PUBLIC_URL+"avatar.png"} alt="u-img" className="rounded" width="50" height="50"/>
          </div>
          <div className="d-inline"><b>{item.displayName}</b></div>
        </Wrapper>
        <WrapperCenter>
          <b><CountUp end={item.score} /></b>&nbsp;&nbsp;<span className="d-none d-md-inline-flex" style={{color:'#afb0b4',fontSize:'15px'}}>points</span>
        </WrapperCenter>
      </li>
      );
  }

  return (
    <div className="App">
      <main role="main" className="container">
      <div className="my-3 mt-5 bg-white rounded shadow-sm">
        <ul className="list-group striped hover overflow-hidden">
          <FlipMove>
          {dataSource.map((item,index)=>itemData(item,index))}
          </FlipMove>
        </ul>
        <table className="table table-striped table-hover">
        <tbody>
        </tbody>      
      </table>
      </div>
    </main>
    </div>
  );
}

export default App;
