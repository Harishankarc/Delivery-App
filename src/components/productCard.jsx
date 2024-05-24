import productImage from '../assets/productImage.jpg'
import rating from '../assets/rating.png'
function ProductCard(){
    return (
        <>
            <div className="product-card">
                <div className="product-card-image">
                    <img src={productImage} alt="productImage" />
                    <h3>20% OFF UPTO &#8377;50</h3>
                </div>
                <h4>PIZZA</h4>
                <div className='product-card-rating'>
                    <img src={rating} alt="rating" />
                    <p>4.4 &#8226; 10-15 mins</p>
                </div>
                <div className='product-card-details'>
                    <p>margetita pizza,cheese pizza</p>
                    <p>Kizhakkumpattukara</p>
                </div>
            </div>
        </>
    );
}
export default ProductCard