import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const PriceList = () => {
    const [prices,setPrices] = useState([]);
    useEffect( ()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])
    return (
        <div className='mt-10'>
            <h3 className='text-center text-purple-800 text-5xl bg-purple-300'>Awesome Affordable Prices</h3>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    prices.map(price => <Card 
                    key={price.id}
                    price = {price}
                    /> )
                }
            </div>
        </div>
    );
};

export default PriceList;