import React, { useRef } from 'react'

import Delete from '../assets/Images/delete.png'
import Reset from '../assets/Images/reset.png'

type Props = {
    id: String,
    name: String,
    value: Number,
    incrementHandler: any,
    decrementHandler: any,
    resetHandler: any,
    deleteCounter: any
}

const Counter: React.FC<Props> = ({id, name, value, incrementHandler, decrementHandler, resetHandler, deleteCounter}: Props) => {

    const counter = useRef<HTMLInputElement>(null)

  return (
    <div className='m-3 p-3 h-container flex flex-col justify-center items-center gap-6 select-none  border-1 rounded-md'> 
        <p className='text-2xl font-thin'>{name}</p>
        <h2 className='text-5xl font-bold'>{value.toString()}</h2>
        <div className='flex flex-row gap-8'>
            <div onClick={() => decrementHandler(id, counter.current?.value)} className='px-5 py-3 bg-gray-300 rounded-xl cursor-pointer'>
                <p className='text-2xl'>-</p>
            </div>
            <div onClick={() => incrementHandler(id, counter.current?.value)} className='px-5 py-3 bg-gray-300 rounded-xl cursor-pointer'>
                <p className='text-2xl'>+</p>
            </div>
        </div>
        <div className='flex flex-row gap-2 text-center'>
            <p className='sm:text-md md:text-lg font-light '>Increment/Decrement by</p>
            <input ref={counter} defaultValue={1} className='w-12 h-7 border-2 border-gray-500 rounded-sm !outline-none' type='number' />
        </div>
        <div className='flex gap-10'>
            <div onClick={() => resetHandler(id)} className='pl-10 pr-9 py-2 rounded-md bg-gray-300 text-xl font-bold cursor-pointer'>
                <img className='w-7' src={Reset} alt="" />
            </div>
            <div onClick={() => {deleteCounter(id)}} className='pl-10 pr-9 py-2 rounded-md bg-gray-300 text-xl font-bold cursor-pointer'>
                <img className='w-7' src={Delete} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Counter