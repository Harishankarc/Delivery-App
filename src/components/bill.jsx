import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Bill(){
    function HandleOnClick(){
        toast('This feature is not available now')
    }
    return (
        <div className="bill">
            <h3>Your Balance</h3>
            <div className="balance-card">
                <h4>Balance</h4>
                <h1>0000 Rs</h1>
                <div className="buttons">
                    <button className="btn1" onClick={HandleOnClick}>TopUp</button>
                    <ToastContainer />
                    <button className="btn1" onClick={HandleOnClick}>Transfer</button>
                    <ToastContainer />
                </div>
            </div>
                <p className="address">Your address</p>
                <div className="place">
                    <h3>Lorem</h3>
                    <button>Change</button>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="adding-details">
                    <button className="btn2">Add Details</button>
                    <button className="btn2">Add Number</button>
                </div>
           
        </div>
    );
}
export default Bill