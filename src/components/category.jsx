import beverage from '../assets/icons8-cocktail-96.png'
import burger from '../assets/icons8-burger-96.png'
import soup from '../assets/icons8-miso-soup-96.png'
import chicken from '../assets/icons8-real-food-for-meals-96.png'
import pizza from '../assets/icons8-pizza-96.png'
function Category(){
    return (
        <div className="category">
            <div className="title">
                <h3>Category</h3>
                <h4>view all</h4>
            </div>
            <div className='cat-items'>
                <div className='items-c'>
                    <img src={beverage} alt="Beverage" />
                    <h3>Beverage</h3>
                </div>
                <div className='items-c'>
                    <img src={burger} alt="Burger" />
                    <h3>Burger</h3>
                </div>
                <div className='items-c'>
                    <img src={soup} alt="Soup" />
                    <h3>Soup</h3>
                </div>
                <div className='items-c'>
                    <img src={chicken} alt="Chicken" />
                    <h3>Chicken</h3>
                </div>
                <div className='items-c'>
                    <img src={pizza} alt="Pizza" />
                    <h3>Pizza</h3>
                </div>
            </div>
        </div>
    );
}
export default Category