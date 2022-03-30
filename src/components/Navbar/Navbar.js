import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'><Link to="/" className='font-sans font-bold text-xl text-green-600'>Crypto Cafe</Link></div>
            <div></div>
        </div>
    );
};

export default Navbar;<h1 className="text-6xl">Navbar</h1>