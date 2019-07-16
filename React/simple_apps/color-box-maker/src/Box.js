import React from 'react';

const Box = ({width,backgroundColor,height,deleteBox}) => {
  return (
    <div>
      <div style = {{width:width,backgroundColor:backgroundColor,height:height,margin:'auto'}}>
      
      </div>
      <button onClick = {() => deleteBox()}>Remove</button>
    </div>
    
  );
};

export default Box;