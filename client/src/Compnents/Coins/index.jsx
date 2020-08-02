import React from 'react';
import {CoinDenom} from '../Utils/CoinDenominations'

const Coins = props => {
    return(
        <div className='grid'>
            {
                CoinDenom.map((coin, index) => {
                    return (
                        <div className='cell' key={index}>
                            <img src={coin.coinImg} alt="" />
                            <h5>Amount of {coin.coinName}: {props.coins[coin.coinType]}</h5>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Coins;