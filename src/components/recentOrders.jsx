import foodImage from '../assets/food.avif'
function recentOrders(){
    return (
        <>
            <div className="details">
                <div className="details-text">
                    <h1>HARISHANKAR</h1>
                    <div className="phone-email">
                        <h3>8129348052</h3>
                        <h3>charishankar30@gmail.com</h3>
                        
                    </div>
                </div>
                <div className="details-btn">
                    <button>EDIT PROFILE</button>
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

        </>
    );
}
export default recentOrders;