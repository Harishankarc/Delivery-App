import ProductCard from '../components/productCard'
import { Link } from 'react-router-dom';
import foodData from '../data/food';
import PropTypes from 'prop-types'

function Products({setIndex}){
    return (
        <div className='products'>
            {
                foodData.map((item,index)=>{
                    return <Link to="/singleproduct"  key={index} onClick={()=>setIndex(index)}><ProductCard name={item}/></Link>
                })
            }
        </div>
    );
}
Products.propTypes ={
    setIndex:PropTypes.func.isRequired
}
export default Products;