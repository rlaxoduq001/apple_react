/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [ title, titleState ] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [ like , likeState ] = useState(0);
  let [ modal, setModal ] = useState(false);
  let [ titleCnt, setTitleCnt ] = useState(0);
  let [ inputVal , setInputVal ] = useState('');

  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={ { color : 'red', fontSize: '16px'}}>블로그</h4>
     </div>
      
    <button onClick={
      ()=>{
        title.sort();
        let copy2 = [...title];
        titleState(copy2);
      }}>정렬</button>

     {/* <span onClick={ () => {
        let copy = [...title];
        copy[0] = '여자 코트 추천'
        titleState(copy);
      }}> 🥶 </span>

      <div className="list">
        <h2>{title[0]} <span onClick={ () => { likeState( like+1 ) }}> 👍 </span> {like} </h2>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h2>{title[1]}</h2>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h2 onClick={ () => { setModal(!modal) }}>{title[2]}</h2>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map( ( compTitle,i) => {
          
          return (
            <div className="list" key={i}>
              <h2 onClick={ () => { 
                setModal(!modal);
                setTitleCnt(i);}} >
                  { compTitle }
              <span onClick={ (e) => { 
                likeState( like+1 )
                e.stopPropagation();
              }}> 👍 </span> {like}
              </h2>
              <p>2월 17일 발행</p>

              <button onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                titleState(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={ (e) => {
        setInputVal(e.target.value);
        console.log(inputVal);
      }}></input>
      
      <button onClick={() => {
        let copy = [...title];
        copy.unshift('asd');
        titleState(copy);
      }}>저장저장</button>


      {
        modal == true ? 
        <Modal color={'skyblue'} 
               title={ title } 
               title2={ titleCnt }
               /> : null
      }

    <Profile></Profile>

    </div>

    
  );
}

const Modal = ( props ) => {
  return (
    <div className='modal' style={{ background :  props.color}}>
      <h4>{props.title[props.title2]}</h4>
      <p>날짜</p> 
      <p>상세내용</p>
    </div>
  )
}


// 리액트 Class 문법
class Profile extends React.Component {
  
  constructor() {
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName() {
    this.setState( {name : 'park'} );
  }

  render() {
    return(
      <div>
        <h1>프로필</h1>
        <p>저는 {this.state.name} 입니다. 나이는 {this.state.age}</p>
        <button onClick={ () => {
          this.changeName();
        }}>버튼</button>
      </div>
    )
  }

}

export default App;
