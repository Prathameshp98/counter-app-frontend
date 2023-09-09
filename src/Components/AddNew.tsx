
import React from 'react'

type Props = {
    newCounter: any
}

const AddNew:React.FC<Props> = ({newCounter}: Props) => {
  return (
    <div className='m-3 p-3 h-84 flex flex-col justify-center items-center gap-6 select-none  border-1 rounded-md'>
        <h2 className='text-3xl font-bold'>New Counter</h2>
        <div onClick={() => newCounter()} className='px-10 py-8 bg-gray-300 rounded-full cursor-pointer'>
            <p className='text-4xl m-0 p-0'>+</p>
        </div>
    </div>
  )
}

export default AddNew