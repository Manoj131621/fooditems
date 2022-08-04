import React, { useContext } from 'react'
import { Cart } from '../Context';

const Card = ({item,index}) => {
    const {cart,setCart}=useContext(Cart)
    item.id=index;
  return (
    <div className='col-md-3'style={{padding:"5px"}}>
                                    <div className='card' style={{width:"",padding:"3px"}}>
                                        <div className='card-body'key={index} >
                                            <div className='d-flex'>
                                            <div class="p-4"><h5 className='card-title'>{item.itemname}</h5><h6 className='card-text'>({item.availabletime})</h6></div>
                                            <div class="p-4"><h5 className='card-title'><span>₹{item.price}</span></h5></div>
                                            </div>
                                            <div className='d-flex flex-row-reverse'>
                                            
                                            <div class="p-4">
                                                
                                                {cart.includes(item)?(
                                                    
                                                    <button className='btn btn-primary' onClick={()=>{
                                                        setCart(cart.filter((cartitem) => cartitem.id !== item.id))
                                                    }}>Remove From Cart</button>

                                                ):( 
                                                    <button className='btn btn-primary' onClick={()=>{
                                                        setCart([...cart,item])
                                                    }}>Add To Cart</button>
                                                )}
                                               
                                                
                                                
                                                {/* <Buttonaddremove cart={cart} setCart={setCart}
                                                quantity={1}  */}
                                                    {/* /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  )
}

export default Card