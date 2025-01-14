import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import WaitTime from './WaitTime';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Banner name = "DiVici's"/>
      <Header/>
      <Menu/>
      <WaitTime/>
      <Footer phone = "123-456-7890" email = "divicirestuarant@gmail.com"/>
    </div>
  );
};

export default App;
