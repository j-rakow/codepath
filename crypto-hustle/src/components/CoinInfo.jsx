import React, { useEffect, useState } from 'react';
import "./CoinInfo.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CoinInfo(props) {
  const [price, setPrice] = useState(null)

  useEffect(() => {
    const getCoinPrice = async () => {
      let response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${props.symbol}&tsyms=USD&api_key=${API_KEY}`);
      let responseJson = await response.json();
      setPrice(responseJson);
    }
    getCoinPrice().catch(console.error);
  }, []);

  return (
    <div>
      {price && (
        <div className="main-list" key={props.symbol}>
          <img className="icons" src={`https://www.cryptocompare.com${props.image}`} alt={`Small icon for ${props.name} crypto coin`}/>
          {`${props.name} (${props.symbol})`}
          <span className="tab">
            ${price.USD} USD
          </span>
        </div>
      )}
    </div>
  )
}

export default CoinInfo