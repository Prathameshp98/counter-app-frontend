import React, { useState } from 'react'
import './index.css'

import Counter from './Components/Counter'
import AddNew from './Components/AddNew'

interface Count {
  id: String,
  name: String,
  value: number
}

const App: React.FC = () => {

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

  const incrementHandler = (id: String, val: number) => {
    const incrementedCounters = counters.map(counter => {
      if(counter.id === id){
        return {...counter, value: +counter.value + +val}
      }

      return counter
    })
    setCounters(incrementedCounters)  
  }

  const decrementHandler = (id: String, val: number) => {
    const decrementedCounters = counters.map(counter => {
      if(counter.id === id){
        return {...counter, value: counter.value - val}
      }

      return counter
    })
    setCounters(decrementedCounters)
  }

  const resetHandler = (id: String) => {
    const resetCounters = counters.map(counter => {
      if(counter.id === id){
        return {...counter, value: 0}
      }
      return counter
    })
    setCounters(resetCounters)
  }

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
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              resetHandler={resetHandler}
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
