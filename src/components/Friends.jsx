import React from 'react';


function Friends(){
  function randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    console.log(color);
    return color;
  }
  var picStyles={
    height: '50px',
    width: '50px',
    backgroundColor: randColor(),
  }
  return(
    <div>
      <div style={picStyles}></div>
      <p>Friend Name</p>
      <button>Follow</button>
    </div>
  )
}

export default Friends;
