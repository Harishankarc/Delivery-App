// import dashboard from '../assets/layout-dashboard.svg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
function DashBoard(props){
    function HandleLinkClick(){
        props.onClose();
    }
    return (
        <>
            <div className="Dashboard"  id="1">
            <h3>Dashboard</h3>
            <ul className="items">
                <Link to="/profile" onClick={HandleLinkClick}><li>Profile</li></Link>
                <li>Dashboard Dark</li>
                <li>Food Order</li> 
                <li>Favorate Food</li>
                <a href="mailto:charishankar30@gmail.com"><li>Message</li></a>
                <Link to="/profile"><li>Order History</li></Link>
                <li>Notification</li>
                <li>Bill</li>
                <li>Settings</li>
                <br />
                <hr />
            </ul>
            <br />
            <h3>Review</h3>
            <ul className="items">
                <li>View Review</li>
                <li>Report</li>
                <li>Rate Us</li>                    
                    
            </ul>
                
            </div>
        </>
        
    );
}
DashBoard.propTypes = {
    onClose : PropTypes.func.isRequired
}
export default DashBoard;