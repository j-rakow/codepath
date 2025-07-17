import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const { symbol } = useParams()


useEffect(()=>{
    const url = `/data/price?fsym=BTC&tsyms=USD`;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data;
    })
    .catch((e) =>{
        console.error(e);
    })
},[]);

function CoinDetail() {

    const [fullDetails, setFullDetails] = useState(null);

    return (
        <></>
    )
}

export default CoinDetail