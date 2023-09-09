import React, { useRef, useState } from 'react'
import './index.css'

import Counter from './Components/Counter'
import AddNew from './Components/AddNew'

interface Count {
  id: String,
  name: String,
  value: Number
}

const App: React.FC = () => {

  const counter = useRef<HTMLInputElement>(null)
  const[counters, setCounters] = useState<Count[]>([])

  const newCounter = () => {
    setCounters(prev => {
      return [...prev, {id: Math.random().toString(), name: 'Counter ' + (prev.length + 1), value: 0}]
    })
  }

  const deleteCounter = (id: String) => {
    const updatedCounters = counters.filter(counter => counter.id !== id)
    setCounters(updatedCounters)
  }

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

  console.log(counters)

  return (
    <div className='m-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {counters.length ?
        <>
          {counters.map(each => (
            <Counter 
              key={+each.id} 
              id={each.id}
              name={each.name} 
              value={each.value} 
              deleteCounter={deleteCounter}
            />
          ))}
        </>
      : null}
      <AddNew newCounter={newCounter} />
    </div>
  )
}

export default App
