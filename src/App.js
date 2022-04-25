import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter'
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Auth/>
    <UserProfile/>
    <Counter/>
    </React.Fragment>
  );
}

export default App;
