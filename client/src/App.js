import React from 'react'

import { useState } from 'react'

function App () {

  const [form, setAmount] = useState({
    amount : 0,
    description : '',
    date : ''
  })
  const handleChange = (e) => {

    e.preventDefault()
    setAmount({...form, [e.target.name] : e.target.value})

  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost//4000/transcation',{
    method : 'POST',
    body : form
  })
    console.log(res);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type='number' name = 'amount' onChange={handleChange} value ={form.amount} placeholder='Enter the amount'></input>
        <input type='text' name = 'description' onChange={handleChange} value ={form.description} placeholder='Enter the description'></input>
        <input type='date' name = 'date' onChange={handleChange} value ={form.date}></input>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}


export default App