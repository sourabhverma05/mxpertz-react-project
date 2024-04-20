import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NextPrevious = () => {
  return (
    <div className='flex justify-between mx-10'>
        <Link to={"/"} className='flex'><ChevronLeft />Previous</Link>
        <Link to={"/next"} className='flex'>Next <ChevronRight /></Link>
    </div>
  )
}

export default NextPrevious
