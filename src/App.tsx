import React, { useRef, useState } from 'react'
import './index.css'

import Counter from './Components/Counter'

interface Count {
  name: String,
  value: Number
}

const App: React.FC = () => {

  const counter = useRef<HTMLInputElement>(null)
  const[counters, setCounters] = useState<Count[]>([
    {name : 'Counter 1', value: 0},
    {name : 'Counter 2', value: 0},
    {name : 'Counter 3', value: 0},
  ])

  // const incrementHandler = () => {
  //   if(counter.current?.value){
  //     const updatedValue = value + parseInt(counter.current?.value)
  //     setValue(updatedValue)
  //   }
  // }

  // const decrementHandler = () => {
  //   if(counter.current?.value){
  //     const updatedValue = value - parseInt(counter.current?.value)
  //     setValue(updatedValue)
  //   }
  // }

  // const resetHandler = () => {
  //   setValue(0)
  // }

  return (
    <div className='m-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {counters.length &&
        <>
          {counters.map(each => (
            <Counter 
              key={Math.random()} 
              name={each.name} 
              value={each.value} 
            />
          ))}
        </>
      }
    </div>
  )
}

export default App
