import React,{useState} from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from './store/store';

export default function Buttoncart({ productData }) {
    const [cartbtn, setCartbtn] = useState(true);

    const [count, setCount] = useState(0);
    const [cartValues, setCartValues] = useRecoilState(cartState)

    const addtoCart=()=>{
        setCartbtn(false)
      }
      function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    function addToCart(values) {
      increment()
      setCartValues((prevValue) => [...prevValue, values])
  }

  function removeFromCart(values) {
      decrement()
      const newData = [...cartValues]
      newData.splice(cartValues.indexOf(values), 1)
      setCartValues(newData)
  }

  return (
    <div>
<div>

        { cartbtn ?         
        <button className='btn btn-success btn-block' onClick={addtoCart}> Add to Cart </button>
        : <div className='row'> 
        <div className='col-md-3'> 
        <button className='btn btn-success btn-block' onClick={() => removeFromCart(productData)}> - </button>
         </div>
        <div className='col-md-6'> {count} </div>
        <div className='col-md-3'> 
        <button className='btn btn-success btn-block' onClick={() => addToCart(productData)}> + </button>
         </div>
        </div>
}
        </div>

    </div>
  )
}
