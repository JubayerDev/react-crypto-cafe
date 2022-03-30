import React from 'react';
import {FiCoffee} from 'react-icons/fi'

const HomePage = () => {
    return (
        <div className='md:px-16 py-8'>
            <div className="flex flex-col justify-center h-[80vh] items-center">
                <h1 className='font-mono text-xl md:text-5xl flex gap-2'>
                    Welcome to Crypto Cafe <FiCoffee/>
                </h1>
                <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>Explore Coins</button>
            </div>
        </div>
    );
};

export default HomePage;