import { useState } from 'react';
import foodImage from '../assets/food.avif'
import x from '../assets/x.svg'

function RecentOrders(){
    const [close,setClose] = useState(true);
    const [name,setName] = useState('HARISHANKAR')
    const [email,setEmail] = useState('charishankar30@gmail.com')
    const [phoneNumber,setPhoneNumber] = useState('8129348052')
    function HandleCloseOnClick(){
        setClose(!close)
    }
    function HandleButtonOnClick(){
        setClose(false)
    }
    function HandleEditOnClick(){
        setName(name)
        setEmail(email)
        setPhoneNumber(phoneNumber)
        HandleCloseOnClick()
    }
    function HandleNameOnChange(value){
        setName(value)
    }
    function HandleEmailOnChange(value){
        setEmail(value)
    }
    function HandlePhoneNumberOnChange(value){
        setPhoneNumber(value)
    }
    return (
        <>
            <div className="details">
                <div className="details-text">
                    <h1>{name}</h1>
                    <div className="phone-email">
                        <h3>{phoneNumber}</h3>
                        <h3>{email}</h3>
                        
                    </div>
                </div>
                <div className="details-btn">
                    <button onClick={HandleButtonOnClick}>EDIT PROFILE</button>
                </div>
            </div>
            <div className="past-orders">
                <h1>PAST ORDERS</h1>
                <div className="past-order-details">
                    <div className="shop-details">
                        <div className="shop-details-image">
                            <img src={foodImage} alt="foodImage" />
                        </div>
                        <div className="shop-details-text">
                            <h3>Shop Name</h3>
                            <p>Shop address..</p>
                            <p>ORDER #00000</p>
                            <h2>VIEW DETAILS</h2>
                        </div>
                    </div>
                    <div className="order-status">
                        <p>Delivered on day,date,time AM/PM</p>
                    </div>
                    <div>
                        <div className='itemPrice'>
                            <p>Item x 1, Item x 1</p>
                            <p>Total paid: &#8377;0.00</p>
                        </div>
                        
                        <div className='reorder-help'>
                            <button className='btn3'>REORDER</button>
                            <button className='btn3'>HELP</button>
                        </div>
                    </div>
                </div>                
            </div>
            {
                close ? 
                    null
                        :
                    <div className='change-profile'>
                        <div className='change-profile-text'>
                            <img src={x} alt="" onClick={HandleCloseOnClick}/>
                            <h2>Edit Profile</h2>
                            
                        </div>
                        <div className='change-profile-input-box'>
                            <h4>Name</h4>
                            <input type="text" value={name} onChange={(event)=>HandleNameOnChange(event.target.value)}/>
                            <h4>Email</h4>
                            <input type="text" value={email} onChange={(event)=>HandleEmailOnChange(event.target.value)}/>
                            <h4>PhoneNumber</h4>
                            <input type="text" value={phoneNumber} onChange={(event)=>HandlePhoneNumberOnChange(event.target.value)}/>
                            <button onClick={HandleEditOnClick}>Edit</button>
                        </div>
                    </div>
            }
        
            

        </>
    );
}
export default RecentOrders;