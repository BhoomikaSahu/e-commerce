import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="Header">
                <Link className='Link' to='/'>Home</Link>
                <Link className='Link' to='/cart'>Cart</Link>
                <Link className='Link' to='/productlist'>Products</Link>
            </div>
        </>
    )
}

export default Header;