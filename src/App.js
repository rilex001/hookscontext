import React from 'react'
import DataFetching from './components/DataFetching'
import { HookCounter } from './components/HookCounter'
import { HookCounterObject } from './components/HookCounterObject'
import HookCounterArray from './components/HookCounterArray'
import HookCounterOne from './components/HookCounterOne'
// import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalHookCounter from './components/IntervalHookCounter'
import CounterOne from './useReducerComponents/CounterOne'

const App = () => {
  return (
    <>
    
      {/*
        Hooks
       <DataFetching />
      <HookCounter />
      <br></br>
      <HookCounterObject />
      <br></br>
      <HookCounterArray />
      <br></br>
      <HookCounterOne />
      <br></br>
      <MouseContainer />
      <br></br>
      <IntervalHookCounter /> */}


      <CounterOne />
    </>

  )
}

export default App
