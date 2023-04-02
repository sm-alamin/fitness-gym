import React from 'react';
import Hero from '../Hero/Hero';
import PriceList from '../PriceList/PriceList';

const Home = () => {
    return (
        <main className='px-4'>
            <Hero />
            <PriceList />
        </main>
    );
};

export default Home;