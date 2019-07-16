import React from 'react';

const Color = ({color,clicked}) => {
  return (
    <div onClick = {() => clicked(color)} style=
      {{backgroundColor:`rgba(${color[0]},${color[1]},${color[2]})`
      ,width:'100px',height:'100px',display:'inline-block',margin:'1px'}}>
      <p style={{marginTop:'36%'}}>Click</p>
    </div>
  );
};

export default Color;