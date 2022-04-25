/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [ title, titleState ] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [ like , likeState ] = useState(0);
  let [ modal, setModal ] = useState(false);

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
        title.map( test => {
          return (
            <div className="list" key={test}>
              <span onClick={ () => { likeState( like+1 ) }}> 👍 </span> {like}
              <h2 onClick={ () => { setModal(!modal) }} >{ test }</h2>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }


      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

const Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
