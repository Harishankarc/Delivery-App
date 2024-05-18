import DashBoard from '../components/dashboard'
import Banner from '../components/banner'
import Category from '../components/category'
import Bill from '../components/bill'

function Home(){
    return (
        <>
            <DashBoard />
            <Banner />
            <Category />
            <Category />
            <Bill />
        </>
    );
}

export default Home