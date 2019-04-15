import React from "react";

function Search(props){
  var buttonStyle = {
    backgroundColor: 'white',
    color: 'gray',
    textAlign: 'left',
    borderColor: 'blue',
    borderRadius: '25%',
  };
  return (
    <div>
      <button style={buttonStyle}>Search</button>
    </div>
  )
}

export default Search;
