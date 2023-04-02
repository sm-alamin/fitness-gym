import React from 'react';
import Feature from '../Feature/Feature';

const Card = ({price}) => {
    return (
        <div className='bg-purple-400 p-4 rounded-lg mt-5'>
            <h3 className='text-center font-extrabold text-purple-950 text-6xl'>{price.price}<span className='text-white text-3xl'>/month</span></h3>
            <h5 className='text-center font-extrabold text-3xl'>{price.name}</h5>
            <ul>
                {
                    price.features.map((feature,index) => <Feature 
                    key={index}
                    feature={feature}
                    />)
                }
            </ul>
        </div>
    );
};

export default Card;