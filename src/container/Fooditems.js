import React, { useContext } from 'react'
import { Cart } from '../Context';
import Card from './Card';
// import Buttonaddremove from './Buttonaddremove';

const Fooditems = () => {
    const [data, setData] = React.useState([]);
   
    console.log(useContext(Cart))
    React.useEffect(() => {
        fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json').then(
            response => response.json()
        ).then(
            json => {
                setData(json)
            }
        )
    }, [])
    
    // console.log(cart);
    return (
        <div class="bg-light">
            <center>
                {data.length > 0 ?
                    <div className='container'>
                        <div className='row'>
                        
                            {data.map((item,index) => (
                                
                                <Card item={item} key={item.id} index={index}  />
))}
                        </div>
                    </div>
                    :
                    <div className='spinner-border text-primary'></div>
                }
            </center>
        </div>
    );
};


export default Fooditems