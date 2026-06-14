import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className='flex bg-purple-400 py-4 px-8  justify-between'>
            <h2 className="text-xl font-bold">Coder</h2>
            <div className="flex gap-8 text-xl font-bold">
                <Link to='/' >Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contack' >Contact</Link>
                <Link to='/product' >Product</Link>
                <Link to='/shop' >Shop</Link>
                
            </div>
        </div>
    )
}

export default Header