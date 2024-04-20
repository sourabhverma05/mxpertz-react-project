import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await fetch("https://child.onrender.com/api/sciencefiction")
            const result = await data.json()
            setData(result)
        }
        fetchData()
    }, [])
    return (
        <>
            <h1 className='text-2xl font-semibold text-center my-10'>Science Fiction Stories</h1>
            <div className='flex justify-between px-40'>
                <button className='bg-blue-700 rounded-full w-28 h-10 text-gray-50 px-2 py-1'>New</button>
                <button className='bg-yellow-700 rounded-full w-28 h-10 text-gray-50 px-2 py-1'>In Progress</button>
                <button className='bg-green-700 rounded-full w-28 h-10 text-gray-50 px-2 py-1'>Completed</button>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-28 h-10 text-gray-50 px-2 py-1'>Clear All</button>
            </div>
            <div className='flex justify-center gap-4 mx-20 flex-wrap my-36'>
                {
                    data.map((item, index) => (
                        <div key={index} className='bg-gradient-to-r from-cyan-500 to-blue-500 w-[180px] rounded-lg pt-1'>
                            <img 
                            src={` https://ik.imagekit.io/dev24/${item?.Image}`} alt="Card Image"
                            className='h-[200px] rounded-xl p-2'
                             />
                           <p className='text-xs text-center'> {item.Title}</p>
                           <button className={`bg-gray-50 w-[150px] mx-auto my-3 flex justify-center rounded-full ${item.Status == 'New'?`text-blue-400`: `text-yellow-400`} ${item.Status == 'Completed'&&`text-green-400`}`}>{item.Status}</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HomePage
