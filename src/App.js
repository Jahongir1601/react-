import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [state, setstate] = useState([])

  function handlerSubmit(e) {
    e.preventDefault()

    const obj = {
      name: e.target[0].value,
      age: e.target[1].value
    }
    console.log(obj);
    setstate([...state, obj])
  }
  

  return (
    <div style={{border: '1px solid black', width: '400px', margin: 'auto', textAlign: 'center'}}>
      <form onSubmit={(e) => handlerSubmit(e)}><br />
        <input type="text" placeholder='name'/><br /><br />
        <input type="number" placeholder='age'/><br /><br />
        <input type="submit" /> 
      </form><br /><br />
      {state.map((item, index) => (
        <div key={index}>
          <h1>Name: {item.name}</h1>
          <h2>Age: {item.age}</h2>
          <button onClick={() => setstate(state.filter((item, index) => item!==item))}>remove</button><br /><b><br /></b>
        </div>
      )
      )}
      {
        state.length === 0? (
          <div>
          <h1>No data</h1>
          </div>
          ) : null
      }
    </div>
    )
  }
export default App