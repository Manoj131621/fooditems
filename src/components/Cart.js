import React, { useContext, useEffect, useState } from 'react'
import Card from '../container/Card'
import Header from '../container/Header'
import { Cart } from '../Context'

const CartOrders = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(Cart);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      
      <Header />
      <div className='container'>
        <div className="d-flex flex-wrap">
          {
            cart.map((item) => (
              <Card index={item.id} key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      <span style={{ fontSize: 30 }}>Total: ₹{total}</span>
    </div>
  )
}

export default CartOrders