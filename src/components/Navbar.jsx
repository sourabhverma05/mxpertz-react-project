import React from 'react'

const NavBar = () => {
    return (
        <div className='container'>
            <header className='px-20 py-2'>
                <nav className='flex justify-between'>
                    <div className='logo'>
                        <h1 className='text-indigo-500'>BrainyLingo</h1>
                    </div>
                    <ul className='flex gap-3'>
                        <li>Home</li>
                        <li>Leaderboard</li>
                        <li>Daily Quiz</li>
                        <li>Gener</li>
                    </ul>   
                    <div>
                        <button className='border px-5 py-1 rounded-full'>Sign Out</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
