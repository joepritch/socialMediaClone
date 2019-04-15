import React from 'react';
import Search from './Search';
import Tweet from './Tweet';

function Header(props){
  var buttonStyle = {
    backgroundColor: 'lightgray',
    padding: '50px',
    textAlign: 'center'
  };
  var headerStyle ={
    backgroundColor: 'white',
    height: '75px',
    width: '100vw',
    display: 'flex',
    flexdirection: 'row',
    justifyContent: 'space-around'
  };
  return (
    <div style={headerStyle}>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>Notifications</button>
      <button style={buttonStyle}>Messages</button>
      <Search/>
      <Tweet/>
    </div>
  )
}

export default Header;
