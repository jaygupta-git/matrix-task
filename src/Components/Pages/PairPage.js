import React from 'react';
import Card from '../Card';

const PairPage = (props)=>{
    return (
        <>
            <div className='cards p-4'>
                <p className='featureStyle' style={{ fontSize: "24px" }}>Pair Search Result</p>
                {props.pairData !== undefined &&  props.pairData.pairs.sort((a, b) => a.priceUsd < b.priceUsd ? 1 : -1).slice(1,10).map(pair=>{
                    return <Card cardData = {pair} />
                }) }
            </div>
        </>
    )
}

export default PairPage;