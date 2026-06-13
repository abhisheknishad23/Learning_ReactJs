import React from "react";

const Header=()=>{
    return(
        <div className='flex bg-purple-400 py-4 px-8  justify-between'>
            <h2 className="text-xl font-bold">Coder</h2>
            <div className="flex gap-8">
                <a className="text-xl font-bold">Home</a>
                <a className="text-xl font-bold">About</a>
                <a className="text-xl font-bold">Contact</a>
            </div>
        </div>
    )
}

export default Header