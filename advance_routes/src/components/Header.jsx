import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className='flex bg-purple-400 py-4 px-8  justify-between'>
            <h2 className="text-xl font-bold">Coder</h2>
            <div className="flex gap-8">
                <Link to='/' className="text-xl font-bold">Home</Link>
                <Link to='/about' className="text-xl font-bold">About</Link>
                <Link to='/contack' className="text-xl font-bold">Contact</Link>
                <Link to='/product' className="text-xl font-bold">Product</Link>
                
            </div>
        </div>
    )
}

export default Header