import ProductCard from '../components/productCard'
import { Link } from 'react-router-dom';
import foodData from '../data/food';
import PropTypes from 'prop-types'

function Products({setIndex, search}){
    return (
        <div className='products'>
            {
                search === '' ? foodData.map((item,index)=>{
                    return <Link to="/singleproduct"  key={index} onClick={()=>setIndex(index)}><ProductCard name={item}/></Link>
                }) : foodData.map((item,index)=>{
                    return item.toLowerCase().includes(search.toLowerCase()) ? <Link to="/singleproduct"  key={index} onClick={()=>setIndex(index)}><ProductCard name={item}/></Link> : null
                })
            }
        </div>
    );
}
Products.propTypes ={
    setIndex:PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
}
export default Products;