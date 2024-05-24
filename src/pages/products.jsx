import ProductCard from '../components/productCard'
function Products(){
    return (
        <div className='products'>
            {
                Array.from({length:10},(key)=> <ProductCard key={key}/>)
            }
        </div>
    );
}

export default Products;