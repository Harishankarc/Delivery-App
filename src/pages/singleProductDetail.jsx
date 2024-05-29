import img1 from '../assets/pizzaImg1.jpg'
import img2 from '../assets/pizzaImg2.jpg'
import img3 from '../assets/pizzaImg3.jpg'
import img4 from '../assets/pizzaImg4.jpg'
import forward from '../assets/forward.svg'
import heart from '../assets/heart.svg'
import heartFav from '../assets/heartFav.svg'
import cart from '../assets/shopping-cart.svg'
import rating from '../assets/rating.png'
import PropTypes from 'prop-types'
import foodData from '../data/food'
import { useState } from 'react'

function SingleProduct({isautorized , index, setFav}){
    const [isFav,setIsFav] = useState(false)
    async function HandleShareOnClick(){
        if(navigator.share){
            try {
            await navigator.share({
                title:'Indian Pizza Hut',
                text:'Check out this products',
                url:'https://indianpizzahut.netlify.app/singleproduct'

            }) 
            console.log('Successfully shared')
            } catch (error) {
                console.log("Error sharing: ",error)
            }
        }else{
            console.log('Webshare is not supported in your browser')
        }
    }
    return (
        <>
            <div className="gallery">
                <div className="img-w"><img src={img1} alt="img1" /></div>
                <div className="img-w"><img src={img2} alt="img2" /></div>
                <div className="img-w img3w"><img src={img3} alt="img3" /></div>
                <div className="img-w img4w"><div><p className='image-text'>Click to see more</p><img src={img4}  alt="img4" /></div></div>
            </div>
            <div className='singleProduct-title'>
                <h1>{foodData[index]}</h1>
                <div className='singleProduct-rating'>
                    <div className='rating'>
                        <img src={rating} alt="rating" />
                        <p>Dining Ratings</p>
                    </div>
                    <div className='rating'>
                        <img src={rating} alt="rating" />
                        <p>Parcel Ratings</p>
                    </div>
                </div>
            </div>
            <div className='singleProduct-details'>
                <p>Pizza, Fast Food, Italian, Desserts, Beverages</p>
                <p>Phi 3, Greater Noida</p>
                <p><span>Closes in 3 minutes</span> - 11am - 11pm(Today)</p>
                <div className='singleProduct-buttons'>
                    {
                        isautorized ? <button className='sp-btn1'>
                        <div>
                            <img src={cart} alt="" />
                            <p>Add to Cart</p>
                        </div>
                    </button> : null
                    }
                    {
                        !isFav ? <button className='sp-btn2' onClick={ () => {setIsFav(!isFav);}} >

                        <div>
                            <img src={heart} alt="" />
                            <p>Favorate</p>
                        </div>
                    </button> : <button className='sp-btn2' onClick={()=>{setFav(foodData[index]); setIsFav(!isFav)}}>
                        <div>
                            <img src={heartFav} alt="" />
                            <p>Favorate</p>
                        </div>
                    </button>
                    }
                    <button className='sp-btn3' onClick={HandleShareOnClick}>
                        <div>
                            <img src={forward} alt="" />
                            <p>Share</p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
SingleProduct.propTypes = {
    isautorized : PropTypes.bool.isRequired,
    index : PropTypes.number.isRequired,
    setFav : PropTypes.func.isRequired
}
export default SingleProduct