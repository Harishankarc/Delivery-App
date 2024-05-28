import beverage from '../assets/icons8-cocktail-96.png'
import burger from '../assets/icons8-burger-96.png'
import soup from '../assets/icons8-miso-soup-96.png'
import chicken from '../assets/icons8-real-food-for-meals-96.png'
import pizza from '../assets/icons8-pizza-96.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Category({setSearch}){
    const navigate = useNavigate()
    // function HandlePizzaOnClick(){
    //     setSearch('pizza')
    //     navigate('/products')
    // }
    function HandleOnClick(value){
        setSearch('')
        setSearch(value)
        navigate('/products')
    }
    return (
        <div className="category">
            <div className="title">
                <h3>Category</h3>
                <Link to="/products"><h4 onClick={()=>{setSearch('')}}>view all</h4></Link>
            </div>
            <div className='cat-items'>
                <div className='items-c' onClick={(e)=>HandleOnClick(e.currentTarget.querySelector('h3').textContent)}>
                    <img src={pizza} alt="Pizza" />
                    <h3>Pizza</h3>
                </div>
                <div className='items-c' onClick={(e)=>HandleOnClick(e.currentTarget.querySelector('h3').textContent)}>
                    <img src={burger} alt="Burger" />
                    <h3>Burger</h3>
                </div>
                <div className='items-c' onClick={(e)=>HandleOnClick(e.currentTarget.querySelector('h3').textContent)}>
                    <img src={soup} alt="Soup" />
                    <h3>Soup</h3>
                </div>
                <div className='items-c' onClick={(e)=>HandleOnClick(e.currentTarget.querySelector('h3').textContent)}>
                    <img src={chicken} alt="Chicken" />
                    <h3>Chicken</h3>
                </div>
                
            </div>
        </div>
    );
}
Category.propTypes ={
    setSearch: PropTypes.func.isRequired
}
export default Category