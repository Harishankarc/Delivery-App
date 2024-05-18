import logo from '../assets/pizza.svg';
import { Link } from 'react-router-dom';
import profile from '../assets/user.svg'
import { useState } from 'react';
import login from '../assets/log-in.svg'
import foodData from '../data/food'
import PropTypes from 'prop-types';


function Navbar({ isautorized }){

    const [items,setItems] = useState('')
    const foodItems = foodData;
    function HandleOnChange(e){
        setItems(e.target.value);
    }
    function HandleOnClick(item){
        setItems(item)

    }   

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>PIZZA HUT</h1>
            </div>
            <div className="search-box">
                <div className='search-items'>
                    <select>
                        <option value="India" className='option'>India</option>
                        <option value="America" className='option'>America</option>
                        <option value="Pakistan" className='option'>Pakistan</option>
                        <option value="Dubai" className='option'>Dubai</option>
                    </select>
                    <input type="text" placeholder='What you want to eat today?' onChange={HandleOnChange} value={items}/>
                </div>
            </div>
            <div className='dropdown-items'>
                    {foodItems
                    .filter((item)=>{
                        return items !== "" && items !== item? item.toLowerCase().includes(items.toLowerCase()) : null;
                    })
                    .slice(0,10)
                    .map((item,key)=>{
                        return <div className='dropdown' key={key} onClick={()=>HandleOnClick(item)}>{item}</div>
                    })}
                    
                </div>
            <div className="profile login">
                
                    { isautorized ? (<>
                        <Link to="/profile">
                            <img src={profile} alt="profile" />
                            <h3>Profile</h3>
                        </Link></>) 
                        : 
                        (<Link to="/login">
                            <img src={login} alt="login" />
                            <h3>Login</h3>
                        </Link>)
                    }
                
            </div>
        </nav>
    );
}
Navbar.propTypes={
    isautorized: PropTypes.bool.isRequired
}

export default Navbar;