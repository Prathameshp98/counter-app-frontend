import React, { useRef } from 'react'

type Props = {
    name: String,
    value: Number
}

const Counter: React.FC<Props> = ({value}: Props) => {

    const counter = useRef(null)

  return (
    <div className='m-3 p-3 flex flex-col justify-center items-center gap-6 select-none  border-1 rounded-md'>
      <h2 className='text-5xl font-bold'>{value.toString()}</h2>
      <div className='flex flex-row gap-8'>
        <div  className='px-5 py-3 bg-gray-300 rounded-xl cursor-pointer'>
          <p className='text-2xl'>-</p>
        </div>
        <div className='px-5 py-3 bg-gray-300 rounded-xl cursor-pointer'>
          <p className='text-2xl'>+</p>
        </div>
      </div>
      <div className='flex flex-row gap-2 text-center'>
        <p className='sm:text-md md:text-lg font-light '>Increment/Decrement by</p>
        <input ref={counter} placeholder='1' className='w-12 h-7 border-2 border-gray-500 rounded-sm !outline-none' type='number' />
      </div>
      <button className='px-8 py-2 rounded-md bg-gray-300 text-xl font-bold cursor-pointer'>Reset</button>
    </div>
  )
}

export default Counter