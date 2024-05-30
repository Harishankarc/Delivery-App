import { useState } from 'react';
import productImage from '../assets/productImage.jpg'
import close from '../assets/x.svg'
import { FormControl,Select,MenuItem } from '@mui/material'
function Cart(){
    const [quantity,setQuantity] = useState(0)
    const [option,setOption] = useState('')
    function HandleIncrementOnClick(){
        if(quantity!== 0){
            setQuantity(quantity - 1)
        }
    }
    function HandleDecrementOnClick(){
            setQuantity(quantity + 1)
        
    }
    function handleChange(event){
        setOption(event.target.value)
    }
    return (
        <>
            <div className="cart">
                <div className="selected-items">
                    <div className="cart-title">
                        <h1>Shopping Cart</h1>
                        <p>no items</p>
                    </div>
                    <hr />
                    <div className="cart-items">
                        <img src={productImage} alt="product-image" className='cart-product-image'/>
                        <div className='product-name-details'>
                            <p>Pizza</p>
                            <p style={{textOverflow:'ellipsis'}}>Hot and Spicy Pizza</p>
                        </div>
                        <div className='cart-add-delete-items'>
                            <button onClick={HandleIncrementOnClick}>-</button>
                            <input type="text" min={0} value={quantity}/>
                            <button onClick={HandleDecrementOnClick}>+</button>
                        </div>
                        <h3 className='price'>&#8377; 44.0</h3>
                        <img src={close} alt="delete" className='cart-delete'/>
                    </div>
                    <hr />
                </div>
                <div className="summary">
                    <div className="cart-title">
                            <h2>Order Summary</h2>
                    </div>
                    <hr />
                    <div className='summary-items-price'>
                        <p>ITEM NO</p>
                        <p>&#8377; 44.0</p>
                    </div>
                    <h3>Select a payment method</h3>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            label="Payment Method"
                            onChange={handleChange}
                            style={{color:'white', border:'2px solid white',outline:'none'}}
                        >
                            <MenuItem value='Cash On Delivery'>Cash On Delivery</MenuItem>
                            <MenuItem value='Card Payment'>Debit / Credit / ATM Card</MenuItem>
                            <MenuItem value='Gift Card'>Gift Card</MenuItem>
                            <MenuItem value='UPI'>UPI</MenuItem>
                            <MenuItem value='Net Banking'>Net Banking</MenuItem>
                        </Select>
                    </FormControl>
                    <hr className='hr-1'/>
                    <p className='summary-price-text'>Price Details</p>
                    <div className='summary-price'>
                        <p>Price(1 items)</p>
                        <p>&#8377;44</p>
                    </div>
                    <div className='summary-price'>
                        <p>Delivery Charges</p>
                        <p className='free-delivery'>FREE Delivery</p>
                    </div>
                    <hr className='hr-2'/>
                    <div className='summary-price'>
                        <p>Total Amount</p>
                        <p>&#8377; 44</p>
                    </div>
                    <button>Place Order</button>
                </div>

            </div>
        </>
    );
}
export default Cart