import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Signin from './components/Signin';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/add' Component={AddEdit}/>
        <Route exact path='/update/:id' Component={AddEdit}/>
        <Route exact path='/view/:id' Component={View}/>
        <Route exact path='/signin' Component={Signin}/>
        <Route exact path='/main' Component={Main}/>
        <Route exact path='/navbar' Component={Navbar}/>
        <Route exact path='/sidebar' Component={Sidebar}/>
        <Route exact path='/chat' Component={Chat}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
