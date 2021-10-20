import React, { useState } from 'react'; import './App.css'; import data from './data/data'; import tagtata from './data/tagtata';
import ListTag from './ListTag'; import ListKinds from './ListKinds'; import NavBar from './Navbar'; import Aside from './Aside';
import Sugg from './Sugg'; import Writing from './Writing'; import Footer from './Footer'; import PlusBtn from './PlusBtn';
import Pictures from './Move/Pictures';
import Input from './Input';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  let [종류, 종류변경] = useState(data);
  let [태그, 태그변경] = useState(tagtata);

  return (
    <BrowserRouter>
      <div className="App">

        <NavBar></NavBar>
        <Switch>
    
        <Route exact path="/">
        <Aside></Aside>

        <hr />
        <ListTag 태그={태그}></ListTag>
        <ListKinds 종류={종류}></ListKinds>

        <PlusBtn></PlusBtn>

        <hr />
        <Sugg></Sugg>

        <hr />
        <Writing></Writing>
        </Route>

        <Route path="/input">
          <Input></Input>
        </Route>

        <Route path="/pictures">
          <Pictures></Pictures>
        </Route>

        </Switch>
        <hr />
        <Footer></Footer>
        
      </div>
    </BrowserRouter>
  )
}



export default App;
