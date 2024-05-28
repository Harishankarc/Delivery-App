import DashBoard from '../components/dashboard'
import Banner from '../components/banner'
import Category from '../components/category'
import Bill from '../components/bill'
import PropTypes from 'prop-types'

function Home({setSearch}){
    return (
        <>
            <div className='dashforbig'>
                <DashBoard setSearch={setSearch}/>
            </div>
            <Banner />
            <Category setSearch={setSearch}/>
            <div className='bill-cover'>
                <Bill />
            </div>
            
        </>
    );
}
Home.propTypes ={
    setSearch: PropTypes.func.isRequired
}
export default Home