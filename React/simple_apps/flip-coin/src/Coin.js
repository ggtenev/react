import React from 'react';

const Coin = ({url}) => {
  return (
    <div>
      {url ? <img src={url} alt="coin"/> : null}
    </div>
  );
};

export default Coin;