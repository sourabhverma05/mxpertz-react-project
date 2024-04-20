import React, { useEffect, useState } from 'react';
import { Brain, Search } from 'lucide-react';   

const NextPage = () => {
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
            <h1 className='text-2xl font-semibold text-center my-10'><span className='text-blue-500'>The Lost City Of</span> Future Earth</h1>
            <div className='flex justify-center gap-16 px-40'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-auto  text-gray-50 px-4 py-1 flex'><Search className='w-[20px]' />Word Explorer</button>
                <button className='bg-blue-700 rounded-full text-gray-50 px-4 py-1'>Story Adventure</button>
                <button className='flex bg-yellow-700 rounded-full text-gray-50 px-4 py-1'><Brain className='w-[20px]' />Brain Quest</button>
            </div>
            <p className='text-center py-8'>Drag Picture to the matching Words, light up correct pairs, shake for a retry </p>

            <div className='flex mx-10'>
                <div className='bg-slate-200 w-[400px] h-[360px] rounded-lg border-dashed border-2 border-gray-400 py-3 px-2'>
                    <div className='text-black'>
                        <p><span className='text-2xl text-blue-400'>Correction</span> <span>(Noun)</span>
                        </p>
                        <p className='text-sm'> aspernatur itaque hic consequatur suscipit dolorem animi totam iste? Saepe corporis iusto quidem laudantium nostrum?</p>
                    </div>
                    <img
                        src={`https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="Card Image"
                        className='h-[210px] rounded-xl p-1'
                    />
                    <p className='text-xs text-center'></p>
                </div>
                <div className='flex justify-center gap-2 flex-wrap mb-10'>
                    {
                        data.slice(0, 10).map((item, index) => (
                            <div key={index} className='bg-gradient-to-r from-cyan-500 to-blue-500 w-[120px] rounded-lg pb-2'>
                                <img
                                    src={` https://ik.imagekit.io/dev24/${item?.Image}`} alt="Card Image"
                                    className='h-[140px] rounded-xl p-1'
                                />
                                <p className='text-xs text-center'> {item.Title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default NextPage
