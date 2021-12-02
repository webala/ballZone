import { Link } from 'react-router-dom';
import image1 from '../assets/122038.png';
import image2 from '../assets/2841911.jpg';

const Home = () => {



    return (
    <div className='mt-4' style={{margin: '50px'}}>
        <div style={{height:'500px', marginRight:'50px'}} className='d-flex justify-content-end'>
            <div style={{marginRight: '380px'}}>
                <h3 className='mb-4'><Link to='/games'>Games</Link></h3>
                <h3><Link to='/players'>Players</Link></h3>
            </div>
            <img src={image1} alt='cool-img' style={{marginRight: '21px'}}/>
            <img src={image2} alt='cool-img'/>
        </div>

        <div className='d-flex justify-content-start mt-4'>
            <h3>Get you daily NBA statistics here for free</h3>
        </div>
    </div>)
}

export default Home;