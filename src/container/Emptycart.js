import React from 'react'
import { useNavigate } from 'react-router-dom'

const Emptycart = () => {
    const navigate=useNavigate();
  return (
    <div className='emptycart'>
        <h4>No orders were placed</h4>
        <button onClick={() => navigate('/')}>
            <faback/>Order now
        </button>
    </div>
  )
}

export default Emptycart