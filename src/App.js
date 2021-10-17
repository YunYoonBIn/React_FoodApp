import React, { useState } from 'react';
import './App.css';
import data from './data/data';
import tagtata from './data/tagtata';
import { BrowserRouter as Router, Switch, Link } from "react-dom";
import ListTag from './ListTag';
import ListKinds from './ListKinds';
import NavBar from './Navbar';
import Aside from './Aside';
import Sugg from './Sugg';
import Writing from './Writing';
import Footer from './Footer';
import PlusBtn from './PlusBtn';

function App() {

  let [종류, 종류변경] = useState(data);
  let [태그, 태그변경] = useState(tagtata);

  return (

    <div className="App">

      <NavBar></NavBar>
      <Aside></Aside>

      <hr />
      <ListTag 태그={태그}></ListTag>
      <ListKinds 종류={종류}></ListKinds>

      <PlusBtn></PlusBtn>

      <hr />
      <Sugg></Sugg>

      <hr />
      <Writing></Writing>

      <hr />
      <Footer></Footer>

    </div>
  )
}



export default App;
