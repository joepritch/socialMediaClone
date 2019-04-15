import React from "react";

function Tweet(props){
  var buttonStyle = {
    backgroundColor: 'white',
    color: 'gray',
    textAlign: 'center',
    borderColor: 'blue',
    borderRadius: '25%',
  };
  return (
    <div>
      <button style={buttonStyle}>Tweet</button>
    </div>
  )
}

export default Tweet;
