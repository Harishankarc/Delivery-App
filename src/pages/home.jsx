import DashBoard from '../components/dashboard'
import Banner from '../components/banner'
import Category from '../components/category'
import Bill from '../components/bill'

function Home(){
    return (
        <>
            <div className='dashforbig'>
                <DashBoard />
            </div>
            <Banner />
            <Category />
            <div className='bill-cover'>
                <Bill />
            </div>
            
        </>
    );
}

export default Home