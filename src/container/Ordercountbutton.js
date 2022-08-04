import React, { useContext } from 'react'
// import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Cart } from '../Context'
const Ordercountbutton = ({orderCount}) => {
    const navigate=useNavigate()
    const {cart,setCart}=useContext(Cart)
  return (
    <div className='btnOrderCount'>
            <div className='count'>{orderCount>=100?'99+':orderCount}</div>
            <button class='btncount'  onClick={()=>navigate('/CartOrders')}>CHECKOUT{cart.length}</button>
    </div>
  )
}


export default Ordercountbutton;