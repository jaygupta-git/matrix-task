import React from 'react';
import Card from '../Card';

const TokenPage = (props) => {
    console.log(props.tokenData);

    return (
        <>
            <div className='cards p-4 m-2'>
                <p className='featureStyle' style={{ fontSize: "24px" }}>Token Search Result</p>
                {props.tokenData !== undefined &&  props.tokenData.pairs.sort((a, b) => a.priceUsd < b.priceUsd ? 1 : -1).slice(1,10).map(pair=>{
                    return <Card cardData = {pair} />
                }) }
            </div>

        </>
    )
}

export default TokenPage;